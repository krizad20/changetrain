import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "./card";

class FindTheWay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      provider1: "",
      provider2: "",
      data: [],
      showMap: true,
    };
  }

  handleChange1 = (event) => {
    this.setState({ provider1: event.target.value });
  };

  handleChange2 = (event) => {
    this.setState({ provider2: event.target.value });
  };

  STATION_DATA = [
    {
      ID: "1",
      TypeI: "AL",
      IdI: "A8",
      NameI: "พญาไท(AL)",
      Outgate: "ทางออกที่ 1",
      TypeF: "BTS",
      IdF: "N2",
      NameF: "พญาไท(BTS)",
      Detail: "-",
      Img: "1.png",
    },
    {
      ID: "2",
      TypeI: "BTS",
      IdI: "N2",
      NameI: "พญาไท(BTS)",
      Outgate: "ทางออกที่ 5",
      TypeF: "AL",
      IdF: "A8",
      NameF: "พญาไท(AL)",
      Detail: "-",
      Img: "2.png",
    },
    {
      ID: "3",
      TypeI: "AL",
      IdI: "A6",
      NameI: "มักกะสัน(AL)",
      Outgate: "ทางออกที่ 1 และ 3",
      TypeF: "MRT",
      IdF: "BL2",
      NameF: "เพชรบุรี(MRT)",
      Detail: "-",
      Img: "3.png",
    },
    {
      ID: "4",
      TypeI: "MRT",
      IdI: "BL21",
      NameI: "เพชรบุรี(MRT)",
      Outgate: "ทางออกที่ 1",
      TypeF: "AL",
      IdF: "A6",
      NameF: "มักกะสัน(AL)",
      Detail: "-",
      Img: "4.png",
    },
    {
      ID: "5",
      TypeI: "BTS",
      IdI: "E4",
      NameI: "อโศก(BTS)",
      Outgate: "ทางออกที่ 3",
      TypeF: "MRT",
      IdF: "BL22",
      NameF: "สุขุมวิท(MRT)",
      Detail: "-",
      Img: "5.png",
    },
    {
      ID: "6",
      TypeI: "MRT",
      IdI: "BL22",
      NameI: "สุขุมวิท(MRT)",
      Outgate: "ทางออกที่ 3",
      TypeF: "BTS",
      IdF: "E4",
      NameF: "อโศก(BTS)",
      Detail: "-",
      Img: "6.png",
    },
    {
      ID: "7",
      TypeI: "BTS",
      IdI: "G1",
      NameI: "กรุงธนบุรี(BTS GOLD)",
      Outgate: "ทางออกที่ 3",
      TypeF: "BTS",
      IdF: "S7",
      NameF: "กรุงธนบุรี(BTS)",
      Detail: "-",
      Img: "7.png",
    },
    {
      ID: "8",
      TypeI: "BTS",
      IdI: "S7",
      NameI: "กรุงธนบุรี(BTS)",
      Outgate: "ทางออกที่ 3",
      TypeF: "BTS",
      IdF: "G1",
      NameF: "กรุงธนบุรี(BTS GOLD)",
      Detail: "-",
      Img: "8.png",
    },
    {
      ID: "9",
      TypeI: "BTS",
      IdI: "N8",
      NameI: "หมอชิต(BTS)",
      Outgate: "ทางออกที่ 2 และ 4",
      TypeF: "MRT",
      IdF: "BL3",
      NameF: "สวนจตุจักร(MRT)",
      Detail: "-",
      Img: "9.png",
    },
    {
      ID: "10",
      TypeI: "MRT",
      IdI: "BL13",
      NameI: "สวนจตุจักร(MRT)",
      Outgate: "ทางออกที่ 1 และ 3",
      TypeF: "BTS",
      IdF: "N8",
      NameF: "หมอชิต(BTS)",
      Detail: "-",
      Img: "10.png",
    },
    {
      ID: "11",
      TypeI: "BTS",
      IdI: "N9",
      NameI: "ห้าแยกลาดพร้าว(BTS)",
      Outgate: "ทางออกที่ 2",
      TypeF: "MRT",
      IdF: "BL4",
      NameF: "พหลโยธิน(MRT)",
      Detail: "-",
      Img: "11.png",
    },
    {
      ID: "12",
      TypeI: "MRT",
      IdI: "BL14",
      NameI: "พหลโยธิน(MRT)",
      Outgate: "ทางออกที่ 4",
      TypeF: "BTS",
      IdF: "N9",
      NameF: "ห้าแยกลาดพร้าว(BTS)",
      Detail: "-",
      Img: "12.png",
    },
    {
      ID: "13",
      TypeI: "BTS",
      IdI: "S12",
      NameI: "บางหว้า(BTS)",
      Outgate: "ทางออกที่ 3 และ 4",
      TypeF: "MRT",
      IdF: "BL34",
      NameF: "บางหว้า(MRT)",
      Detail: "-",
      Img: "13.png",
    },
    {
      ID: "14",
      TypeI: "MRT",
      IdI: "BL34",
      NameI: "บางหว้า(MRT)",
      Outgate: "ทางออกที่ 3 และ 4",
      TypeF: "BTS",
      IdF: "S12",
      NameF: "บางหว้า(BTS)",
      Detail: "-",
      Img: "14.png",
    },
    {
      ID: "15",
      TypeI: "BTS",
      IdI: "S2",
      NameI: "ศาลาแดง(BTS)",
      Outgate: "ทางออกที่ 2 และ 4",
      TypeF: "MRT",
      IdF: "BL26",
      NameF: "สีลม(MRT)",
      Detail: "-",
      Img: "15.png",
    },
    {
      ID: "16",
      TypeI: "MRT",
      IdI: "BL26",
      NameI: "สีลม(MRT)",
      Outgate: "ทางออกที่ 2",
      TypeF: "BTS",
      IdF: "S2",
      NameF: "ศาลาแดง(BTS)",
      Detail: "-",
      Img: "16.png",
    },
    {
      ID: "17",
      TypeI: "MRT",
      IdI: "BL10",
      NameI: "เตาปูน(MRT)",
      Outgate: "ชั้นที่ 3",
      TypeF: "MRT",
      IdF: "PP16",
      NameF: "เตาปูน(MRT PURPLE)",
      Detail: "-",
      Img: "17.png",
    },
    {
      ID: "18",
      TypeI: "MRT",
      IdI: "PP16",
      NameI: "เตาปูน(MRT PURPLE)",
      Outgate: "ชั้นที่ 4",
      TypeF: "MRT",
      IdF: "BL10",
      NameF: "เตาปูน(MRT)",
      Detail: "-",
      Img: "18.png",
    },
  ];

  findWays = () => {
    let data = [];

    for (let i = 0; i < this.STATION_DATA.length; i++) {
      if (
        this.STATION_DATA[i].TypeI === this.state.provider1 &&
        this.STATION_DATA[i].TypeF === this.state.provider2
      ) {
        data.push(this.STATION_DATA[i]);
      }
    }

    this.setState({
      data: data,
      showMap: false,
    });
  };

  findAllWays = () => {
    this.setState({
      data: this.STATION_DATA,
      provider1: "",
      provider2: "",
      showMap: false,
    });
  };

  resetWays = () => {
    this.setState({
      data: [],
      provider1: "",
      provider2: "",
      showMap: true,
    });
  };

  render() {
    return (
      <Box>
        <Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="provider1-label">ต้นทาง</InputLabel>
              <Select
                labelId="provider1-label"
                id="provider1-select"
                value={this.state.provider1}
                label="Provider1"
                onChange={this.handleChange1}
              >
                <MenuItem value={"BTS"}>Bts</MenuItem>
                <MenuItem value={"MRT"}>Mrt</MenuItem>
                <MenuItem value={"AL"}>Airport Link</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="provider2-label">ปลายทาง</InputLabel>
              <Select
                labelId="provider2-label"
                id="provider2-select"
                value={this.state.provider2}
                label="Provider2"
                onChange={this.handleChange2}
              >
                <MenuItem value={"BTS"}>Bts</MenuItem>
                <MenuItem value={"MRT"}>Mrt</MenuItem>
                <MenuItem value={"AL"}>Airport Link</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" sx={{ m: 1 }} onClick={this.resetWays}>
              ยกเลิก
            </Button>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb="3"
            spacing="3"
          >
            <Button
              variant="contained"
              sx={{ m: 1 }}
              onClick={this.findAllWays}
            >
              เส้นทางทั้งหมด
            </Button>
            <Button variant="contained" sx={{ m: 1 }} onClick={this.findWays}>
              ค้นหาเส้นทาง
            </Button>
          </Box>
        </Box>
        <br></br>
        <Box className="scrollBox">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {this.state.data.map((data) => (
              <Grid item xs={2} sm={4} md={4} key={data.ID}>
                <Card
                  title={data.NameI + " --> " + data.NameF}
                  desc={data.Outgate}
                  img={data.Img}
                />
              </Grid>
            ))}
          </Grid>
          <img
            className="map"
            src={require("../img/map.png")}
            alt=""
            style={{ display: this.state.showMap ? "block" : "none" }}
            sx={{
              objectFit: "cover",
              objectPosition: "center",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              overflow: "auto",
              width: "100%",
              height: "100%",
              margin: "0",
            }}
          />
        </Box>
      </Box>
    );
  }
}

export default FindTheWay;
