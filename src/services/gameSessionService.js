import axios from "axios";

const API_URL = 'https://squad-back-production.up.railway.app/api/gameSessions/'

const getAllGameSessions = async (searchParams, currentPage) => {
    const data = {}
    data.searchParams = searchParams
    data.currentPage = currentPage

    const response = await axios.post(API_URL + 'gameSessions', data)
    return response.data
}

const getUserGameSessions = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL + 'UserGameSessions', config)

    return response.data
}

const createGameSession = async (gameSessionData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(API_URL + 'UserGameSessions', gameSessionData, config)

    return response.data
}

const deleteGameSession = async (gameSessionId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.delete(API_URL + 'UserGameSessions/' + gameSessionId, config)

    return response.data
}

const joinGameSession = async (gameSessionId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.put(API_URL + 'joinSession/' + gameSessionId, "", config)

    return response.data
}

const deleteParticipant = async (gameSessionId, userId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.put(API_URL + '/deleteParticipant/' + gameSessionId, {id: userId}, config)

    return response.data
}

const editGameSession = async (gameSessionId, gameSessionData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.put(API_URL + '/UserGameSessions/' + gameSessionId, {data: gameSessionData}, config)

    return response.data
}


const gameSessionService = {
    getAllGameSessions,
    getUserGameSessions,
    createGameSession,
    deleteGameSession,
    editGameSession,
    joinGameSession,
    deleteParticipant,
}

export default gameSessionService