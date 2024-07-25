import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const router = useRouter();

    useEffect(() => {
        fetch('https://api.afreebmart.com/api/categories')
            .then(response => response.json())
            .then(data => setCategories(data.categories))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleSelect = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSearch = () => {
        let url = 'https://api.afreebmart.com/api/products?search=' + searchTerm;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Navigate to the fullwidth page with the search term as a query parameter
                router.push({
                    pathname: '/fullwidth',
                    query: { searchTerm: searchTerm }
                });
                // Pass the search results as a prop
                router.push({
                    pathname: '/fullwidth',
                    props: { products: data }
                });
            })
            .catch(error => console.error('Error:', error));

        setSearchTerm("");
    };

    const handleInput = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };

    return (
        <>
            <form>
                <input
                    value={searchTerm}
                    onKeyDown={handleInput}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="Search all products"
                />
            </form>
        </>
    );
};

export default Search;