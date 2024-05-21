// DataFetcher.js
import React, {useEffect} from 'react';

export let data; // This is now an exported variable

export const FetchDataComponent = ({url}) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData = await response.json();
                data = jsonData; // Store the data in the exported variable
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [url]); // re-run the effect if the url changes

    return (
        data
    );
};
