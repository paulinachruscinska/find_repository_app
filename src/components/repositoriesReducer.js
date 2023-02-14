export const repositoriesReducer=(state, action)=>{
    switch (action.type){
        case 'ADD_REPOSITORY':
            return [...state, {
                id: action.favouriteRepository.id,
                owner: action.favouriteRepository.login,
                name: action.favouriteRepository.name,
                stargazers_count: action.favouriteRepository.stargazers_count,
                created_at: action.favouriteRepository.created_at,
                html_url: action.favouriteRepository.html_url,
                description: action.favouriteRepository.description,
            }]
        case 'DELETE_REPOSITORY':
            return state.filter(repository=> repository.id !== action.id)
        default: return state
    }
}