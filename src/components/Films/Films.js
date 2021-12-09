import React, { useState, useEffect } from 'react';
import './Films.css'

const Films = () => {
    let [films, setFilms] = useState([]);
    let [foundFilms, setFoundFilms] = useState('')
    let [searchString, setSearch] = useState('');

    useEffect(() => {
        async function fetchFilms() {
            const response = await fetch('http://api.tvmaze.com/shows')
            const json = await response.json()
            const films = json.slice(0, 20)
            setFilms(films)
        }
        fetchFilms()
    }, [])

    function onChange(e) {
        let searchString = e.target.value
        setSearch(searchString)
    }

    function onClick() {
        let filmFound = films.filter(film => (film.name).includes(searchString))
        setFoundFilms(filmFound)
    }

    function resetTable() {
        setFoundFilms();
    }

    function sortFilms(event) {
        event.preventDefault()

        let resultSort = films.sort((a, b) => {
            let field = event.target.name;
            let average

            if (field === 'rating') {
                average = 'average';
            }

            if ((a[field][average] || a[field]) < (b[field][average] || b[field])) {
                return -1;
            }
            if ((a[field][average] || a[field]) > (b[field][average] || b[field])) {
                return 1;
            }
            return 0;
        })
        // console.log('sort: ', resultSort)
        setFoundFilms(resultSort)
    }

    return (
        <div>
            <input type="text" onChange={onChange}></input>
            <button type="submit" onClick={onClick}>Search</button>
            <button type="reset" onClick={resetTable}>Reset</button>
            <table>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Год выпуска</th>
                        <th>Рейтинг</th>
                    </tr>
                    <tr>
                        <td><button type="submit" name="name" onClick={sortFilms}>Sort</button></td>
                        <td><button type="submit" name="premiered" onClick={sortFilms}>Sort</button></td>
                        <td><button type="submit" name="rating" onClick={sortFilms}>Sort</button></td>
                    </tr>
                </thead>
                <tbody>
                    {(foundFilms || films).map((film, index) => {
                        return (
                            <tr key={index}>
                                <td>{film.name}</td>
                                <td>{new Date(Date.parse(film.premiered)).getFullYear()}</td>
                                <td>{film.rating.average}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Films;