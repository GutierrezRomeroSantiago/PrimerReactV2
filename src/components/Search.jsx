import styles from "./Search.module.css"
import { FaSearch } from 'react-icons/fa';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery"
import { useEffect } from 'react'

export function Search() {

    const query = useQuery()
    const search = query.get("search")

    const history = useHistory();

    
    const hadleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className={styles.searchContainer} onSubmit={hadleSubmit}>
          <div className={styles.searchBox}>

              <input className={styles.searchInput} type="text" placeHolder="Buscar..." value={search} onChange={(e) => {
                    const value = e.target.value;
                    history.push("/?search="+value)
                }} />

          </div>
        </form>
    )
}
