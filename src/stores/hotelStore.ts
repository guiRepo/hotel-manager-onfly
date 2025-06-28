import { defineStore } from 'pinia'
import axios from 'axios'

export interface Hotel {
  id: number
  name: string
  price: number
  rating: number
}

export const useHotelStore = defineStore('hotels', {
  state: () => ({
    hotels: []       as Hotel[],
    loading: false,
    error: null      as string | null,

    currentPage: 1,
    perPage: 4,    
    searchQuery: '',
    selectedSort: 'price'
  }),

  getters: {
    filteredHotels(state) {
      let list = [...state.hotels]

      if (state.searchQuery.trim()) {
        const q = state.searchQuery.toLowerCase()
        list = list.filter(h =>
          h.name.toLowerCase().includes(q)
        )
      }

      if (state.selectedSort === 'price')   list.sort((a, b) => a.price  - b.price)
      if (state.selectedSort === 'rating')  list.sort((a, b) => b.rating - a.rating)
      if (state.selectedSort === 'name')    list.sort((a, b) => a.name.localeCompare(b.name))

      return list
    },

    paginatedHotels(state): Hotel[] {
      const start = (state.currentPage - 1) * state.perPage
      return this.filteredHotels.slice(start, start + state.perPage)
    },

    totalPages(state): number {
      return Math.max(1, Math.ceil(this.filteredHotels.length / state.perPage))
    }
  },

  actions: {
    async fetchHotels() {
      this.loading = true
      try {
        const { data } = await axios.get<Hotel[]>('http://localhost:3000/hotels')
        this.hotels = data
        this.error  = null
      } catch (e:any) {
        this.error = 'Erro ao buscar hotéis'
      } finally {
        this.loading = false
      }
    },

    setPage(page: number) { this.currentPage = page },
    setSearch(q: string) { this.searchQuery  = q; this.currentPage = 1 },
    setSort(sort: string) { this.selectedSort = sort; this.currentPage = 1 }
  }
})
