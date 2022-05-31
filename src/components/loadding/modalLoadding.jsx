import React from "react";
// modalLoadding
import './modalLoadding.css'
export default function modalLoadding() {
  return (
    <div class="loading">
      <div class="gooey">
        <span class="dot"></span>
        <div class="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
