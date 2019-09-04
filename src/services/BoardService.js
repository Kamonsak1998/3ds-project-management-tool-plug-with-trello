import {mainAPIOptions} from "../constant/config";
import {BaseService} from "./BaseService";

export class BoardService extends BaseService {
    fetchDashboard = (token) => {
        return this.requester.post('/getdashboard', {token}, mainAPIOptions())
    }

    fetchHistory = ({token, idBoard}) => {
        return this.requester.post('/gethistory', {token, idBoard}, mainAPIOptions())
    }
}