import React from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      Github Followers: {data.followers}
      <img width="300" height="300" src={data.avatar_url} alt={data.name} />
    </div>
  );
}

export default Github;

export async function githubInfoLoader() {
  const response = await fetch("https://api.github.com/users/jaychauhan07");
  return response.json();
}
