import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { chartCoins, coinDetail, data, search, trenddata } from "./cryptoService";

const cryptoSlice = createSlice({
    name: "crypto",
    initialState: {
        user: null,
        cryptoCoins: null,
        trendingCoins: null,
        searchcoins: null,
        chart: null,
        singlecoin: null,
        isLoading: false,
        isError: false,
        isSuccess: false

    },
    reducers: {

        login: (state, action) => {

            return {
                ...state,
                user: action.payload


            }

        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, state => {
                state.isLoading = true
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.isLoading = false
                state.cryptoCoins = action.payload
                state.isSuccess = true
            })
            .addCase(getData.rejected, state => {
                state.isSuccess = false
                state.isError = true
            })
            .addCase(trendingData.pending, state => {
                state.isLoading = true
            })
            .addCase(trendingData.fulfilled, (state, action) => {
                state.isLoading = false
                state.trendingCoins = action.payload
                state.isSuccess = true
            })
            .addCase(trendingData.rejected, state => {
                state.isSuccess = false
                state.isError = true
            })
            .addCase(searchData.pending, state => {
                state.isLoading = true
            })
            .addCase(searchData.fulfilled, (state, action) => {

                state.isLoading = false
                state.searchcoins = action.payload
                state.isSuccess = true
            })
            .addCase(searchData.rejected, state => {
                state.isSuccess = false
                state.isError = true
            })
            .addCase(chartData.pending, state => {
                state.isLoading = true
            })
            .addCase(chartData.fulfilled, (state, action) => {

                state.isLoading = false
                state.chart = action.payload
                state.isSuccess = true
            })
            .addCase(chartData.rejected, state => {
                state.isSuccess = false
                state.isError = true
            })
            .addCase(chartDetail.pending, state => {
                state.isLoading = true
            })
            .addCase(chartDetail.fulfilled, (state, action) => {

                state.isLoading = false
                state.singlecoin = action.payload
                state.isSuccess = true
            })
            .addCase(chartDetail.rejected, state => {
                state.isSuccess = false
                state.isError = true
            })

    }
})



export const { login } = cryptoSlice.actions
export default cryptoSlice.reducer


export const getData = createAsyncThunk('fetch_data', async () => {

    try {
        const response = await data();
        return response;
    } catch (error) {
        console.log(error);
    }
})
export const trendingData = createAsyncThunk('Trending_data', async () => {

    try {
        const response = await trenddata();

        return response;
    } catch (error) {
        console.log(error);
    }
})

export const searchData = createAsyncThunk('searchData', async (text) => {
    try {
        const response = await search(text);
        return response;
    } catch (error) {
        console.log(error);
    }
})

export const chartData = createAsyncThunk('chart', async (id) => {
    try {
        const response = await chartCoins(id);
        return response;
    } catch (error) {
        console.log(error)
    }
});


export const chartDetail = createAsyncThunk('pages', async (id) => {
    try {
        const response = await coinDetail(id);
        return response;
    } catch (error) {
        console.log(error)
    }
});
