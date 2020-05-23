import React, { Component } from "react";
import tw from "twin.macro";
import Container from "./common/container";
import Grid from "./common/grid";
import { getSpaces } from "../services/spaces";
import { getCities } from "../services/cities";
import SpaceItem from "./common/spaceItem";
import SpacesMap from "./spacesMap";
import Select from "./common/select";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";

class Spaces extends Component {
  state = {
    spaces: [],
    cities: [],
    selectedCity: null,
    currentPage: 1,
    pageSize: 6,
  };

  componentDidMount() {
    this.setState({ spaces: getSpaces() });
    this.setState({ cities: getCities() });
  }

  handleCitySelect = (event) => {
    this.setState({ selectedCity: event.target.value, currentPage: 1 });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleItemClick = (position) => {
    this.setState({ mapCenter: position });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedCity,
      spaces: allSpaces,
    } = this.state;

    let filtered = allSpaces;
    if (selectedCity)
      filtered = allSpaces.filter((s) => s.city._id === selectedCity);

    const spaces = paginate(filtered, currentPage, pageSize);

    return { totalCount: filtered.length, data: spaces };
  };

  render() {
    const { pageSize, currentPage, cities } = this.state;

    const { totalCount, data: spaces } = this.getPagedData();

    return (
      <React.Fragment>
        <Container
          style={tw`flex justify-between items-center border-t-2 border-b-2 border-solid border-gray-200`}
        >
          <Select
            options={cities}
            onChange={this.handleCitySelect}
            placeholder="Every City"
          />
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
