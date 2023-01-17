import React from "react";

function BrowseCards() {
  return (
    <div class="container align-items-center">
      <h1 className="text-center ps-5 browseHeader">Browse</h1>
      <div class="row justify-content-md-center align-items-center">
        <div class="col-md-3 m-2 align-items-center item item1" style={{display:"flex",alignItems:"center"}}>
          <a style={{all: "unset", cursor: "pointer"}} href="/cards">
            <div class="col itemcontent">Scifi</div>
          </a>
        </div>
        <div class="col-md-3 m-2 align-items-center item item2" style={{display:"flex",alignItems:"center"}}>
          <a style={{all: "unset", cursor: "pointer"}} href="/cards">
            <div class="col itemcontent">Thriller</div>
          </a>
        </div>
        <div class="col-md-3 m-2 align-items-center item item3" style={{display:"flex",alignItems:"center"}}>
          <a style={{all: "unset", cursor: "pointer"}} href="/cards">
            <div class="col itemcontent">Horror</div>
          </a>
        </div>
        <div class="col-md-3 m-2 align-items-center item item4" style={{display:"flex",alignItems:"center"}}>
          <a style={{all: "unset", cursor: "pointer"}} href="/cards">
            <div class="col itemcontent">Action</div>
          </a>
        </div>
        <div class="col-md-3 m-2 align-items-center item item5" style={{display:"flex",alignItems:"center"}}>
          <a style={{all: "unset", cursor: "pointer"}} href="/cards">
            <div class="col itemcontent">Romance</div>
          </a>
        </div>
        <div class="col-md-3 m-2 align-items-center item item6" style={{display:"flex",alignItems:"center"}}>
          <a style={{all: "unset", cursor: "pointer"}} href="/cards">
            <div class="col itemcontent">History</div>
          </a>
        </div>
        <div class="col-md-3 m-2 align-items-center item item7" style={{display:"flex",alignItems:"center"}}>
          <a style={{all: "unset", cursor: "pointer"}} href="/cards">
            <div class="col itemcontent">Comedy</div>
          </a>
        </div>
        <div class="col-md-3 m-2 align-items-center item item8" style={{display:"flex",alignItems:"center"}}>
          <a style={{all: "unset", cursor: "pointer"}} href="/cards">
            <div class="col itemcontent">Autobiography</div>
          </a>
        </div>
        <div class="col-md-3 m-2 align-items-center item item9" style={{display:"flex",alignItems:"center"}}>
          <a style={{all: "unset", cursor: "pointer"}} href="/cards">
            <div class="col itemcontent">Children</div>
          </a>
        </div>
        <div class="col-md-3 m-2 align-items-center item item10"style={{display:"flex",alignItems:"center"}}>
          <a style={{all: "unset", cursor: "pointer"}} href="/cards">
            <div class="col itemcontent">Regional</div>
          </a>
        </div>
        <div class="col-md-3 m-2 align-items-center item item11" style={{display:"flex",alignItems:"center"}}>
          <a style={{all: "unset", cursor: "pointer"}} href="/cards">
            <div class="col itemcontent">Crime</div>
          </a>
        </div>
        <div class="col-md-3 m-2 align-items-center item item12" style={{display:"flex",alignItems:"center"}}>
          <a style={{all: "unset", cursor: "pointer"}} href="/cards">
            <div class="col itemcontent">Mystery</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BrowseCards;
