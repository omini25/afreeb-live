import React, { useEffect, useState } from "react";
import {server} from "../../mainServer";
import Cat1Tab from '../elements/FeaturedTab';
import Cat2Tab from '../elements/NewArrivalTab';
import Cat3Tab from '../elements/TrendingTab';
import Link from "next/link"

function CategoryTab() {
    const [active, setActive] = useState("1");
    const [catAll, setCatAll] = useState([]);
    const [cat1, setCat1] = useState([]);
    const [cat2, setCat2] = useState([]);
    const [cat3, setCat3] = useState([]);

    const catPAll = async () => {
        const request = await fetch(`${server}/products`);
        const response = await request.json();
        const allProducts = response.products;
        const catAllItem = allProducts.filter((item) => item.category && item.status !== 'suspended' && item.status !== 'inactive' );
        setCatAll(catAllItem);
        setActive("1");
    };



    const catP1 = async () => {
        const request = await fetch(`${server}/products`);
        const response = await request.json();
        const allProducts = response.products;
        const cat1Item = allProducts.filter((item) => item.category === "Fresh foods" && item.status !== 'suspended' && item.status !== 'inactive');
        setCat1(cat1Item);
        setActive("2");
    };


    const catP2 = async () => {
        const request = await fetch(`${server}/products`);
        const response = await request.json();
        const allProducts = response.products;
        const cat2Item = allProducts.filter((item) => item.category === "Foodie (Hot Food)" && item.status !== 'suspended' && item.status !== 'inactive' );
        setCat2(cat2Item);
        setActive("3");
    };
    const catP3 = async () => {
        const request = await fetch(`${server}/products`);
        const response = await request.json();
        const allProducts = response.products;
        const cat3Item = allProducts.filter((item) => item.category === "Frozen Foods" && item.status !== 'suspended' && item.status !== 'inactive' );
        setCat3(cat3Item);
        setActive("4");
    };

    useEffect(() => {
        catPAll();
    }, []);

    return (
        <>
            <div className="section-title style-2 wow animate__animated animate__fadeIn">
                <h3>Main Products</h3>
                <ul className="nav nav-tabs links" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className={
                                active === "1" ? "nav-link active" : "nav-link"
                            }
                            onClick={catPAll}
                        >
                            All
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className={
                                active === "2" ? "nav-link active" : "nav-link"
                            }
                            onClick={catP1}
                        >
                            Foodie (Hot Food)
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className={
                                active === "3" ? "nav-link active" : "nav-link"
                            }
                            onClick={catP2}
                        >
                            Fresh Foods
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className={
                                active === "4" ? "nav-link active" : "nav-link"
                            }
                            onClick={catP3}
                        >
                            Frozen Foods
                        </button>
                    </li>
                </ul>
            </div>

            <div className="tab-content wow fadeIn animated">
                <div
                    className={
                        active === "1"
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                    }
                >
                    <div className="product-grid-4 row">
                        <Cat1Tab products={catAll} />
                    </div>
                </div>

                <div
                    className={
                        active === "2"
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                    }
                >
                    <div className="product-grid-4 row">
                        <Cat1Tab products={cat1} />
                    </div>
                </div>

                <div
                    className={
                        active === "3"
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                    }
                >
                    <div className="product-grid-4 row">
                        <Cat3Tab products={cat2} />
                    </div>
                </div>
                <div
                    className={
                        active === "4"
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                    }
                >
                    <div className="product-grid-4 row">
                        <Cat2Tab products={cat3} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default CategoryTab;
