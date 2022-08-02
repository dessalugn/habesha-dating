import {EventEmitter} from "events";
import actionTypes from "../actions/actionTypes";
import dispatcher from "../apiDispatcher";

const CHANGE_EVENT="change";

let _course=[];

class SubjectStore extends EventEmitter {
    addChangeListener(callBack){
        this.on(CHANGE_EVENT,callBack);
    }
    removeChangeListener(callBack){
        this.removeListener(CHANGE_EVENT,callBack);
    }
    emitChange(){
        this.emit(CHANGE_EVENT);
    }
    getSubjects(){
        return _course;
    }
    getSubjectsBySlug(slug){
        return _course.find(i=>i.slug===slug);
    }
}
const store =new SubjectStore();
dispatcher.register(action=>{
    switch(action.actionType){
        case actionTypes.CREATE_COURSE:
            _course.push(action.course);
            store.emitChange();
            break;
        case actionTypes.CHANGE_EVENT:
            _course.push(action.course);
            break;
        case actionTypes.LIST_COURSE:
            _course.push(action.course);
            break;
        default:
            _course.push(action.course);
            break;
    }
});
export default store;