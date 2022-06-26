import React from "react";

export default function ListItem(props) {
  return (
    <a
      href=""
      class="list-group-item list-group-item-action list-group-item-success"
    >
      {props.item}
    </a>
  );
}
