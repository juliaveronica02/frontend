import React, { useEffect, useState } from "react";
import axios from "axios";

const Index = (props) => {
  const pembali = () => {
    axios.get("https://api.juliaveronica.com/users/show");
  };
};
