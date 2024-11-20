import React, { useState } from "react";
import axios from "../utils/api";
import { Button, TextField, Typography, Box } from "@mui/material";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", age: "", file: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("age", formData.age);
    data.append("file", formData.file);

    try {
      const response = await axios.post("/upload", data);
      alert("Data submitted successfully: " + response.data.message);
    } catch (error) {
      console.error(error);
      alert("Submission failed!");
    }
  };

  return (
    <Box className="form-container">
      <Typography variant="h4" gutterBottom>
        Healthcare Dashboard
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          type="number"
          required
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          component="label"
          sx={{ margin: "10px 0" }}
        >
          Upload File
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Form;
