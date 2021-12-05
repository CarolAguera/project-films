import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  const [search, setSearch] = useState([]);
  const router = useRouter();
  function onChange(e) {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  }
  return (
    <div style={{ backgroundColor: "#1F1F1F" }}>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "90px",
            alignItems: "center",
            backgroundColor: "#1F1F1F",
          }}
        >
          <h1>GazinFilms</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <InputGroup>
              <FormControl
                style={{
                  background: "rgba(196, 196, 196, 0.3)",
                  color: "#fff",
                  borderColor: "rgba(196, 196, 196, 0.3)",
                }}
                aria-describedby="basic-addon2"
                onChange={onChange}
                name="searchInput"
              />
              <Button
                id="button-addon2"
                style={{
                  background: "rgba(196, 196, 196, 0.3)",
                  borderColor: "rgba(196, 196, 196, 0.3)",
                }}
                type="button"
                onClick={() => {
                  router.push({
                    pathname: "/search",
                    query: { search: search.searchInput },
                  });
                }}
              >
                <BsSearch />
              </Button>
            </InputGroup>
          </div>
        </div>
      </Container>
    </div>
  );
}
