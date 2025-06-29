import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useHotelStore } from '../stores/hotelStore'

const mockHotels = [
  {
    id: 1,
    name: 'Hotel Alpha',
    stars: 5,
    totalPrice: 1500,
    dailyPrice: 300,
    tax: 150,
    thumb: '',
    district: 'Centro',
    placeId: 'rj-rio',
    amenities: ['Wi-Fi'],
    hasBreakFast: true,
    hasRefundableRoom: true
  },
  {
    id: 2,
    name: 'Beta Hotel',
    stars: 4,
    totalPrice: 800,
    dailyPrice: 200,
    tax: 80,
    thumb: '',
    district: 'Copacabana',
    placeId: 'rj-rio',
    amenities: ['Wi-Fi'],
    hasBreakFast: false,
    hasRefundableRoom: false
  },
  {
    id: 3,
    name: 'Gamma Hostel',
    stars: 2,
    totalPrice: 300,
    dailyPrice: 100,
    tax: 30,
    thumb: '',
    district: 'Lapa',
    placeId: 'mg-bh',
    amenities: ['Wi-Fi'],
    hasBreakFast: true,
    hasRefundableRoom: true
  }
]

describe('Hotel Store', () => {
  let store: ReturnType<typeof useHotelStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useHotelStore()
    store.hotels = [...mockHotels]
  })

  it('deve listar todos os hotéis inicialmente', () => {
    expect(store.filteredHotels.length).toBe(3)
  })

  it('deve filtrar por nome do hotel', () => {
    store.setSearch('Beta')
    expect(store.filteredHotels.length).toBe(1)
    expect(store.filteredHotels[0].name).toBe('Beta Hotel')
  })

  it('deve filtrar por cidade (placeId)', () => {
    store.setSelectedCity('mg-bh')
    expect(store.filteredHotels.length).toBe(1)
    expect(store.filteredHotels[0].placeId).toBe('mg-bh')
  })

  it('deve combinar filtro de cidade + nome', () => {
    store.setSelectedCity('rj-rio')
    store.setSearch('alpha')
    expect(store.filteredHotels.length).toBe(1)
    expect(store.filteredHotels[0].name).toBe('Hotel Alpha')
  })

  it('deve paginar os hotéis corretamente', () => {
    store.perPage = 2
    store.setPage(1)
    expect(store.paginatedHotels.length).toBe(2)

    store.setPage(2)
    expect(store.paginatedHotels.length).toBe(1)
  })

  it('deve ordenar por preço', () => {
    store.setSort('price')
    const [first] = store.filteredHotels
    expect(first.name).toBe('Gamma Hostel') 
  })

  it('deve ordenar por estrelas', () => {
    store.setSort('rating')
    const [first] = store.filteredHotels
    expect(first.name).toBe('Hotel Alpha') 
  })

  it('deve ordenar por nome', () => {
    store.setSort('name')
    const names = store.filteredHotels.map(h => h.name)
    expect(names).toEqual(['Beta Hotel', 'Gamma Hostel', 'Hotel Alpha'])
  })
})
