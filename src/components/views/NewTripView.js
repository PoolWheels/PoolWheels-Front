import {React, useEffect, useState, useContext} from "react";

let asyncPostNewTrip = async () => {
    try {
      var error = "";
      const url = requestParams.url;
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(requestParams.body),
      };
  
      var res = await fetch(url, requestOptions);
      var data = await res.json();
    } catch (e) {
      error = e.message;
    }
    return { res, data, error };
  };