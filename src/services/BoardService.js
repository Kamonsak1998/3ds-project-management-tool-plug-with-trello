import { mainAPIOptions } from "../constant/config";
import { BaseService } from "./BaseService";

export class BoardService extends BaseService {
    fetchDashboard = (token) => {
        return this.requester.get('/getdashboard', { token }, mainAPIOptions())
    }

    fetchHistory = ({ token, idBoard }) => {
        return this.requester.post('/gethistory', { token, idBoard }, mainAPIOptions())
    }

    fetchLeaderboard = ({ token, idBoard }) => {
        return this.requester.post('/getleaderboard', { token, idBoard }, mainAPIOptions())
    }

    fetchSetdatetime = ({
        startDate,
        sprintDay,
        endDate,
        idBoard,
        boardName
    }) => {
        return this.requester.post('/setdate', {
            startDate,
            sprintDay,
            endDate,
            idBoard,
            boardName
        }, mainAPIOptions())
    }

    fetchchecksetdate = ({idBoard}) => {
        return this.requester.get('/checksetdate', {idBoard}, mainAPIOptions())
    }


    fetchsetmember = ({ token,idBoard }) => {
        return this.requester.post('/setmember', {token,idBoard},mainAPIOptions())
    }

    fetchcheckscoresize = () => {
        return this.requester.get('/checkscoresize',mainAPIOptions())
    }

    fetchsetscoresize = ({Points}) => {
        return this.requester.post('/setscoresize',{Points},mainAPIOptions())
    }


}