import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { client } from "../client";
import { feedQuery, searchQuery } from "../utils/data";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    async function fetchFeed() {
      if (categoryId) {
        const query = searchQuery(categoryId);
        const data = await client.fetch(query);
        setPins(data);
        setLoading(false);
      } else {
        const data = await client.fetch(feedQuery);
        setPins(data);
        setLoading(false);
      }
    }
    fetchFeed();
  }, [categoryId]);

  if (loading)
    return <Spinner message="We are adding new ideas to your feed!" />;

  if (!pins?.length) return <h2>No Pins available</h2>;
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
