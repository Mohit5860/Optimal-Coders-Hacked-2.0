import React from "react";
import Search from "../components/Home/Search";
import Carousel from "../components/Carousal/Carousal";
import ButtonCarousal from "../components/Carousal/ButtonCarousal";

const HomePage = () => {
  const slides = [
    {
      name: "Grant Thornthon",
      img: "https://imgs.search.brave.com/3gnywUP6Mx14cB44TFR7yRsy3dvuzoyywtrgPofQXPk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMwLzA5/LzZlLzMwMDk2ZTZj/OWY0MGEzMWRhNDcx/MzE1YmUxMDIwM2I3/LmpwZw",
    },
    {
      name: "ABC Campaign",
      img: "https://imgs.search.brave.com/TRmmjkfpXfAxpMSwUJhPYhNzpzaKh3YngrtC0STb0dk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9lZGl0/Lm9yZy9lZGl0b3Iv/anNvbi8yMDIyLzAz/LzE2L2UvNi9lNmFk/N2U3OTNmNGM2NmIw/NjJjMGZjNGQ2ZTQz/ZWJkOC53ZWJw",
    },
    {
      name: "XYZ Campaign",
      img: "https://imgs.search.brave.com/olFU8D8Du1GhNmBRZv237aexvtL8H9HOSOfA8smvwIY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvaHVt/YW5pdGFyaWFuLWFj/dC1wb3N0ZXItdGVt/cGxhdGVfMjMtMjE0/OTA4NDU1Mi5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw",
    },
    {
      name: "Campaign",
      img: "https://imgs.search.brave.com/VjXUNEgdvM3Di6RW5w7CdSehSZnAV8vBj25MPBB9YQ0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U5Lzk0/LzE3L2U5OTQxNzgw/ZDQ1YmE1Zjg3MjQ1/ZDMyMTVkNzVlMjg1/LmpwZw",
    },
    {
      name: "Blood",
      img: "https://imgs.search.brave.com/0ESrkZnrLfFBcVz2P9jMKsLFFZmX1ycK2ySRJjuJibQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhmLzJh/LzJiLzhmMmEyYjgx/YjUwNTE1N2JhMDE4/NmFmYjI0MTMzNGIw/LmpwZw",
    },
    {
      name: "Donate",
      img: "https://imgs.search.brave.com/WDnNWghX6YVjm25fU266bgCp-cscvLSR5vDvUZxcjKw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9lZGl0/Lm9yZy9pbWcvYmxv/Zy9vbGotYmxvb2Qt/ZHJpdmUtZG9uYXRp/b24tdGVtcGxhdGVz/LWRlc2lnbnMtY3Vz/dG9taXphYmxlLW9u/bGluZS1mcmVlLndl/YnA",
    },
    {
      name: "ABC Campaign",
      img: "https://imgs.search.brave.com/TRmmjkfpXfAxpMSwUJhPYhNzpzaKh3YngrtC0STb0dk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9lZGl0/Lm9yZy9lZGl0b3Iv/anNvbi8yMDIyLzAz/LzE2L2UvNi9lNmFk/N2U3OTNmNGM2NmIw/NjJjMGZjNGQ2ZTQz/ZWJkOC53ZWJw",
    },
    {
      name: "PQR ",
      img: "https://imgs.search.brave.com/qtKLVTqA2yWeO1wYSB6boc6KujUGYQ8WOyfT6GQ1L-M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kMWNz/YXJrejhvYmU5dS5j/bG91ZGZyb250Lm5l/dC9wb3N0ZXJwcmV2/aWV3cy9ibG9vZC1k/cml2ZS1kZXNpZ24t/dGVtcGxhdGUtZTE2/ZjQwOGQ0MjJkYzY5/MjY5NjI5ZTljNWI5/MmFmOGMuanBnP3Rz/PTE2OTg0NTY5ODA",
    },
    {
      name: "Donate Blood",
      img: "https://imgs.search.brave.com/RyjHT9isuSgW1rs2LaGITh3_J8vng6vERdoXNe7De6I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVmcmVzaGhlYWx0/aGNhcmUuYml6L1Vw/bG9hZC9mbGRCbG9n/L0RvbmF0ZS1CbG9v/ZC5qcGc_bWF4d2lk/dGg9Mjk0JmZvcm1h/dD1wbmcmcXVhbGl0/eT04MA",
    },
    {
      name: "Grant Thornthon",
      img: "https://imgs.search.brave.com/3gnywUP6Mx14cB44TFR7yRsy3dvuzoyywtrgPofQXPk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzMwLzA5/LzZlLzMwMDk2ZTZj/OWY0MGEzMWRhNDcx/MzE1YmUxMDIwM2I3/LmpwZw",
    },
  ];
  return (
    <div>
      <Search />
      <Carousel />
      <h1 className="text-3xl font-semibold text-center p-5 mt-20">
        Upcomming Campaigns
      </h1>
      <ButtonCarousal slides={slides} totalSlides={10} />
    </div>
  );
};

export default HomePage;
