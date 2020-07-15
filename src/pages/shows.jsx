import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Loading  from '../components/Loading';
import ShowTile from '../components/show-tile';


const GET_SHOWS_BY_NAME = gql`
    query {
            show (name: "girls") {
                name,
                id
              }
          }
`; 

const Shows = () => {
  const { data, loading, error } = useQuery(GET_SHOWS_BY_NAME);
  console.log(data);
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  return (
    <Fragment>
      {data.show &&
        data.show.map(show => (
          <ShowTile key={show.id} show={show} />
        ))}
    </Fragment>
  );
};

export default Shows;
