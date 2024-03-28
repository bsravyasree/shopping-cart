import { useState, useEffect } from "react";
import { Checkbox, CheckboxProps, Card, Button, Rate } from "antd";
import "./filters.component.css";
import { CartState } from "../../context/context";

export default function Filters() {
  const [categories, setCategories] = useState([]);

  const {
    productDispatch,
    productState: { byCategory, byRating },
  } = CartState();


  const onChange: CheckboxProps["onChange"] = (e) => {
   const value = e?.target?.value;
   const checked = e?.target?.checked;
   
    if(value && checked){
        productDispatch({
            type: "FILTER_BY_CATEGORY",
            payload: [...byCategory, value],
          });
    } else {
        productDispatch({
            type: "FILTER_BY_CATEGORY",
            payload: byCategory.filter(f => f !== value)
          });
    }
  };

  const onClearFilters = () =>{
    productDispatch({
        type: "CLEAR_FILTERS",
        payload: [],
      });
  }

  const onRatingClicked = (value:  number) => {
    productDispatch({
        type: "FILTER_BY_RATING",
        payload: value,
      });
  }


  useEffect(() => {
    fetch(`http://localhost:3000/categories`)
      .then((response) => response.json())
      .then((res) => {
        setCategories(res.map((r) => r.category));
      });
  }, []);

  return (
    <>
      <Card title="Filters" bordered={false} style={{ width: 300 }}>
        <div>
          <h2>Categories</h2>
          <div className="filter-card">
            {categories.map((category, index) => (
              <Checkbox onChange={onChange}  key={index} value={category}>
                {category}
              </Checkbox>
            ))}
          </div>
        </div>
        <div>
            <h2>Rating</h2>
            <Rate defaultValue={byRating} value={byRating} onChange={onRatingClicked}/>
        </div>
        <div>
          <Button type="primary" style={{marginTop: "20px"}} onClick={onClearFilters}>
                 Clear filters
          </Button>
          </div>
      </Card>
    </>
  );
}
