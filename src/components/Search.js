import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Like from './Like';

function Search() {
    const [value, setValue] = useState("")
    const [result, setResult] = useState([])

    const fetchImagesByPage = (newPage) => {
        if (value === "") {
            console.log("-------******* Page Number *******-------", newPage);
            fetch(`https://api.unsplash.com/photos/?client_id=aFRqP9RZorWVR8v1Vbtrxjz3jGdduZsInYGfU_RJO3Q&page=${newPage}&orientation=squarish`)
                .then(response => response.json())
                .then(data => {
                    setResult(result.concat(data))

                })
        }
    }

    const fetchImages = () => {
        fetch(`https://api.unsplash.com/search/photos/?client_id=aFRqP9RZorWVR8v1Vbtrxjz3jGdduZsInYGfU_RJO3Q&query=${value}&orientation=squarish`)
            .then(res => res.json())
            .then(data => {
                setResult(data.results)
            })
    }

    return (
        <div className="App">
            <div className="mydiv">
                <span> Search </span>
                <input
                    style={{ width: "60%" }}
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <button onClick={() => fetchImages()}> Send </button>
            </div>
            <InfiniteScroll
                pageStart={0}
                loadMore={fetchImagesByPage}
                hasMore={true}
            >
                <div className="gallery">
                    {
                        result.map((item) => {
                            return (
                                <div className="item">
                                    <img className="gallery" key={item.id} src={item.urls.regular} alt="Loading" />
                                    <Like item={item} itemId={item.id} />
                                </div>
                            )
                        })
                    }
                </div>
            </InfiniteScroll>
        </div>
    );
}

export default Search;