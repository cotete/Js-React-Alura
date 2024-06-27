import './DropDownChampions.css';
import React, { useState, useEffect } from 'react';

const DropDownChampions = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://ddragon.leagueoflegends.com/cdn/14.12.1/data/en_US/champion.json");
                const result = await response.json();
                const champions = Object.keys(result.data);
                setData(champions);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='DropDownChamp'>
            <label>{props.label}</label>
            <select>
                {data.map((champion) => (
                    <option key={champion}>{champion}</option>
                ))}
            </select>
        </div>
    );
};

export default DropDownChampions;