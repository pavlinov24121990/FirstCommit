import React from 'react';








const SpanMainSerchAndSort = ({ SearchValue, SortToValue, SortByValue }) => {
  return (
    <span>
      <input type="search" onChange={ e => SearchValue(e)} name="" id="" placeholder="Search" />
      <p>Sort to</p>
      <select onChange={ e => SortToValue(e)}>
        <option value="desc">From A to Z</option>
        <option value="asc">From Z to A</option>
      </select>
      <p>Sort by</p>
      <select onChange={ e => SortByValue(e)}>
        <option value="created_at">Date of creation</option>
        <option value="title">Title</option>
        <option value="likes_count">Likes count</option>
      </select>
    </span>
  )
}


export {SpanMainSerchAndSort}