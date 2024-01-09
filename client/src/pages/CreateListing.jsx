import React from "react";

export default function CreateListing() {
  return (
    <main className="p-3 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center my-7">Create Listing</h1>
      <form className="flex flex-col sm:flex-row">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className=" border p-3 rounded-lg"
            id="name"
            maxLength="80"
            minLength="8"
            required
          />
          <input
            type="text"
            placeholder="Description"
            className=" border p-3 rounded-lg"
            id="description"
            maxLength="250"
            minLength="10"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className=" border p-3 rounded-lg"
            id="address"
            required
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span className="text-sm font-semibold">Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span className="text-sm font-semibold">Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span className="text-sm font-semibold">Parking Spot</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furnished" className="w-5" />
              <span className="text-sm font-semibold">Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span className="text-sm font-semibold">Offer</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="p-3 border border-gray-300 rounded-lg"
                id="bedroom"
                min="1"
                max="10"
                required
              />
              <p className="font-semibold">Beds</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="p-3 border border-gray-300 rounded-lg"
                id="bathrooms"
                min="1"
                max="10"
                required
              />
              <p className="font-semibold">Baths</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="p-3 border border-gray-300 rounded-lg"
                id="regularPrice"
                required
              />
              <p className="font-semibold">Regular Price</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="p-3 border border-gray-300 rounded-lg"
                id="bedroom"
                min="1"
                max="10"
                required
              />
              <p className="font-semibold">Beds</p>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
