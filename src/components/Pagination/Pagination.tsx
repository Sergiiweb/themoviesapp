import {Stack} from "@mui/material";
import {Pagination as PaginationMUI} from '@mui/material';
import {useSearchParams} from "react-router-dom";
import * as React from "react";

import {useAppSelector} from "../../hooks";
import css from "./Pagination.module.css";

const Pagination = () => {
    const {total_pages} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1'});

    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setQuery(prev => {
            prev.set('page', page.toString());
            return prev;
        })
    }

    return (
        <div className={css.Pagination}>
            {total_pages &&
                <Stack spacing={2}>
                    <PaginationMUI
                        count={total_pages}
                        page={+query.get('page')}
                        onChange={handleChange}
                        variant="outlined"
                        shape="rounded"/>
                </Stack>
            }
        </div>
    );
};

export {Pagination};