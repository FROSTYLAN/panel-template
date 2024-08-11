import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Card,
  Table,
  Select,
  styled,
  TableRow,
  useTheme,
  MenuItem,
  TableBody,
  TableCell,
  TableHead,
  IconButton
} from "@mui/material";
import { Paragraph } from "app/components/Typography";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

// STYLED COMPONENTS
const CardHeader = styled(Box)(() => ({
  display: "flex",
  paddingLeft: "24px",
  paddingRight: "24px",
  marginBottom: "12px",
  alignItems: "center",
  justifyContent: "space-between"
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  textTransform: "capitalize"
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: "pre",
  "& small": {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"
  },
  "& td": { borderBottom: "none" },
  "& td:first-of-type": { paddingLeft: "16px !important" }
}));

const Small = styled("small")(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: "#fff",
  padding: "2px 8px",
  borderRadius: "4px",
  overflow: "hidden",
  background: bgcolor,
  boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"
}));

export default function CategoryTable() {
  const [data, setData] = useState([])

  useEffect(async () => {
    const response = await axios.get('http://localhost:3000/api/categories')
    setData(response || [])
  }, [])

  return (
    <Card elevation={3} sx={{ pt: "20px", mb: 3 }}>
      <CardHeader>
        <Title>Categorias</Title>
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">This Month</MenuItem>
          <MenuItem value="last_month">Last Month</MenuItem>
        </Select>
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2} sx={{ px: 3 }}>
                Código
              </TableCell>

              <TableCell colSpan={2} sx={{ px: 0 }}>
                Nombre
              </TableCell>

              <TableCell colSpan={4} sx={{ px: 0 }}>
                Descripción
              </TableCell>

              <TableCell colSpan={1} sx={{ px: 0 }}>
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {[].map((category, index) => (
              <TableRow key={index} hover>
                <TableCell colSpan={2} align="left" sx={{ px: 0, textTransform: "capitalize" }}>
                  <Box display="flex" alignItems="center" gap={4}>
                    <Paragraph>{category.code}</Paragraph>
                  </Box>
                </TableCell>

                <TableCell colSpan={2} align="left" sx={{ px: 0, textTransform: "capitalize" }}>
                  <Box display="flex" alignItems="center" gap={4}>
                    <Paragraph>{category.name}</Paragraph>
                  </Box>
                </TableCell>

                <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: "capitalize" }}>
                  <Box display="flex" alignItems="center" gap={4}>
                    <Paragraph>{category.description}</Paragraph>
                  </Box>
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={1}>
                  <IconButton>
                    <Edit color="primary" />
                    <Delete color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
}