import React, { useState } from "react";
import styles from "./../../styles/components/filters/genre.module.css";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Dropdown, Button, Typography, Checkbox, Row, Col } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { useSearchParams } from "next/navigation";

// redux hooks
import { useAppSelector } from "@/redux/store";
import {
  setGenreFilters,
  filterChanged,
} from "@/redux/features/movieListSlice";
import { useDispatch } from "react-redux";

const { Text } = Typography;

const GenreFilter: React.FC = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  const [open, setOpen] = useState(false);

  let genreFilters: string[] = useAppSelector((state) => {
    return state.movieListSlice.genreFilters;
  });

  let filterChange: boolean = useAppSelector((state) => {
    return state.movieListSlice.filterChanged;
  });

  const onChange = (checkedValues: CheckboxValueType[]) => {
    dispatch(setGenreFilters({ genreFilters: [...checkedValues] }));
    dispatch(filterChanged({ change: !filterChange }));
  };

  return (
    <Dropdown
      trigger={["click"]}
      onOpenChange={(open) => {
        setOpen(open);
      }}
      dropdownRender={() => {
        return (
          <>
            <div id="genreFilter" className={styles.optionsBox}>
              <Checkbox.Group data-testid={"checkBox-group"} onChange={onChange} defaultValue={genreFilters}>
                <Row justify={"space-around"}>
                  <Col lg={12} md={12} sm={24} xs={24}>
                    <Checkbox
                      value={"drama"}
                      style={{ color: "white", margin: "10px" }}
                      data-testid={"drama-option"}
                    >
                      <Text className={styles.optionText}>{"درام"}</Text>
                    </Checkbox>
                  </Col>
                  <Col lg={12} md={12} sm={24} xs={24}>
                    <Checkbox
                      value={"comedy"}
                      style={{ color: "white", margin: "10px" }}
                      data-testid={"comedy-option"}

                    >
                      <Text className={styles.optionText}>{"کمدی"}</Text>
                    </Checkbox>
                  </Col>
                  <Col lg={12} md={12} sm={24} xs={24}>
                    <Checkbox
                      value={"sci-fi"}
                      style={{ color: "white", margin: "10px" }}
                      data-testid={"scifi-option"}

                    >
                      <Text className={styles.optionText}>{"علمی تخیلی"}</Text>
                    </Checkbox>
                  </Col>
                  <Col lg={12} md={12} sm={24} xs={24}>
                    <Checkbox
                      value={"action"}
                      style={{ color: "white", margin: "10px" }}
                      data-testid={"action-option"}
                    >
                      <Text className={styles.optionText}>{"اکشن"}</Text>
                    </Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </div>
          </>
        );
      }}
      overlayClassName={styles.optionsBox}
    >
      <Button className={styles.dropdown} data-testid={"genre-button"} >
        <Row justify={"space-around"}>
          <Col>
            <Text className={styles.title}>{"ژانر"}</Text>
          </Col>
          <Col
            xl={{ offset: "21" }}
            lg={{ offset: "20" }}
            md={{ offset: "20" }}
            sm={{ offset: "20" }}
            xs={{ offset: "20" }}
          >
            {open ? (
              <CaretUpOutlined style={{ color: "#E8E8E8" }} />
            ) : (
              <CaretDownOutlined style={{ color: "#E8E8E8" }} />
            )}
          </Col>
        </Row>
      </Button>
    </Dropdown>
  );
};

export default GenreFilter;
