export const api = {
    pokemons: async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6&offset=2')
      return await response.json()
    },
  
    pokemon: async (name) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      return await response.json()
    }
  }
  