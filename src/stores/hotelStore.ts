import { defineStore } from 'pinia'
import axios from 'axios'

export interface Hotel {
  id: number
  name: string
  stars: number
  totalPrice: number
  dailyPrice: number
  tax: number
  thumb: string
  district: string
  placeId: string
  amenities: string[]
  hasBreakFast: boolean
  hasRefundableRoom: boolean
}

export interface CityOption {
  label: string
  value: string
}

export const useHotelStore = defineStore('hotels', {
  state: () => ({
    hotels: [] as Hotel[],
    loading: false,
    error: null as string | null,

    currentPage: 1,
    perPage: 3,
    selectedSort: 'price',
    searchQuery: '',
    selectedCity: null as string | null,

    searchDistrict: '',
    cityLoading: false,
    cityOptions: [] as CityOption[]
  }),

  getters: {
    filteredHotels (state): Hotel[] {
      let list = [...state.hotels]

      // Filtro por cidade
      if (state.selectedCity) {
        list = list.filter(h => h.placeId === state.selectedCity)
      }

      // Filtro por nome de hotel
      if (state.searchQuery.trim()) {
        const q = state.searchQuery.toLowerCase()
        list = list.filter(h => h.name.toLowerCase().includes(q))
      }

      // Ordenação
      const sort = state.selectedSort
      if (sort === 'price')  list.sort((a, b) => a.totalPrice - b.totalPrice)
      if (sort === 'rating') list.sort((a, b) => b.stars - a.stars)
      if (sort === 'name')   list.sort((a, b) => a.name.localeCompare(b.name))

      return list
    },

    paginatedHotels (state): Hotel[] {
      const start = (state.currentPage - 1) * state.perPage
      return this.filteredHotels.slice(start, start + state.perPage)
    },

    totalPages (state): number {
      return Math.max(1, Math.ceil(this.filteredHotels.length / state.perPage))
    }
  },

  actions: {
    async fetchHotels () {
      this.loading = true
      try {
        const { data } = await axios.get<Hotel[]>('http://localhost:3000/hotels')
        this.hotels = data
        this.error = null
      } catch (e) {
        this.error = 'Erro ao buscar hotéis'
      } finally {
        this.loading = false
      }
    },

    async searchCities(query: string) {
      if (!query || query.length < 3) {
        this.cityOptions = []
        this.selectedCity = null
        return
      }

      this.cityLoading = true

      try {
        const { data: cities } = await axios.get('http://localhost:3000/cities')
        const hotelPlaceIds = new Set(this.hotels.map(h => h.placeId))
        const normalizedQuery = query.trim().toLowerCase()

        const matched = cities.filter((city: any) =>
          hotelPlaceIds.has(city.placeId) &&
          city.name.toLowerCase().includes(normalizedQuery)
        )

        this.cityOptions = matched.map((city: any) => ({
          label: `${city.name}, ${city.state.abbreviation}`,
          value: city.placeId
        }))

        // Se só uma cidade foi encontrada, aplicar o filtro automaticamente
        if (this.cityOptions.length === 1) {
          this.selectedCity = this.cityOptions[0].value
          this.currentPage = 1
        }

      } catch (e) {
        console.error('Erro ao buscar cidades:', e)
        this.cityOptions = []
      } finally {
        this.cityLoading = false
      }
    },

    setSelectedCity(placeId: string | null) {
      this.selectedCity = placeId
      this.currentPage = 1
    },

    setPage(page: number)         { this.currentPage = page },
    setSort(sort: string)         { this.selectedSort = sort; this.currentPage = 1 },
    setSearch(q: string)          { this.searchQuery = q; this.currentPage = 1 },
  }
})
