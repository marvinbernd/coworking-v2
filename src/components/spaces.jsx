import React, { Component } from 'react';
import tw from 'twin.macro';
import Container from './common/container';
import Grid from './common/grid';
import { getSpaces } from '../services/spaces';
import { getCities } from '../services/cities';
import { getKeywords } from '../services/keywords';
import SpaceItem from './common/spaceItem';
import SpacesMap from './spacesMap';
import SelectBox from './common/select';
import MultiSelect from './common/multiSelect';
import { paginate } from '../utils/paginate';
import Pagination from './common/pagination';

class Spaces extends Component {
  state = {
    spaces: [],
    cities: [],
    keywords: [],
    selectedCity: null,
    selectedKeywords: [],
    currentPage: 1,
    pageSize: 6,
  };

  componentDidMount() {
    this.setState({ spaces: getSpaces() });
    this.setState({ cities: getCities() });
    this.setState({ keywords: getKeywords() });
  }

  handleCitySelect = (event) => {
    this.setState({ selectedCity: event.value, currentPage: 1 });
  };

  handleKeywordsSelect = (event) => {
    if (!event) return;

    const selectedKeywords = event.map(({ value: _id }) => ({
      _id,
    }));
    this.setState({ selectedKeywords, currentPage: 1 });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleItemClick = (position) => {
    this.setState({ mapCenter: position });
  };

  formatKeywords(arr) {
    let keywords = arr.map((keyword) => keyword._id);
    return keywords;
  }

  arrayContainsArray(superset, subset) {
    return subset.every(function (value) {
      return superset.indexOf(value) >= 0;
    });
  }

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedCity,
      selectedKeywords,
      spaces: allSpaces,
    } = this.state;

    let filtered = allSpaces;

    if (selectedCity)
      filtered = filtered.filter((s) => s.city._id === selectedCity);

    if (selectedKeywords.length > 0) {
      filtered = filtered.filter((s) => {
        const keywords = this.formatKeywords(s.keywords);
        const selectedFormatKeywords = this.formatKeywords(selectedKeywords);
        return this.arrayContainsArray(keywords, selectedFormatKeywords);
      });
    }

    const spaces = paginate(filtered, currentPage, pageSize);

    return { totalCount: filtered.length, data: spaces };
  };

  render() {
    const { pageSize, currentPage, cities, keywords } = this.state;

    const { totalCount, data: spaces } = this.getPagedData();

    return (
      <React.Fragment>
        <Container
          style={tw`flex justify-between items-center border-t-2 border-b-2 border-solid border-gray-200`}
        >
          <div style={tw`flex flex-grow`}>
            <SelectBox
              options={cities}
              onChange={this.handleCitySelect}
              placeholder="Select City"
            />
            <MultiSelect
              options={keywords}
              onChange={this.handleKeywordsSelect}
              placeholder="Select Keywords"
            />
          </div>

          <span>{totalCount} Results</span>
        </Container>
        <Container>
          <Grid style={tw`grid-cols-2`}>
            <div>
              <Grid style={tw`grid-cols-2 items-stretch`}>
                {spaces.map((space) => (
                  <SpaceItem
                    key={space._id}
                    space={space}
                    onItemClick={this.handleItemClick}
                  />
                ))}
                <Pagination
                  itemsCount={totalCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                />
              </Grid>
            </div>
            <SpacesMap spaces={spaces} />
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default Spaces;
