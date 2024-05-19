import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
} from "@mui/material";

const ViewPurchaseDetails = () => {
  // Example purchase details data
  const purchaseDetails = [
    {
      id: 1,
      username: "john_doe",
      artName: "Painting 1",
      quantity: 2,
      price: "$100",
    },
    {
      id: 2,
      username: "jane_smith",
      artName: "Sculpture 1",
      quantity: 1,
      price: "$200",
    },
    // Add more purchase details objects as needed
  ];

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        View Purchase Details
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Art Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {purchaseDetails.map((purchase) => (
              <TableRow key={purchase.id}>
                <TableCell>{purchase.username}</TableCell>
                <TableCell>{purchase.artName}</TableCell>
                <TableCell>{purchase.quantity}</TableCell>
                <TableCell>{purchase.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ViewPurchaseDetails;
