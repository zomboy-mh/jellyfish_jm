// 管理接口地址
import { apiResquest } from '../utils/http.js'

//登录
export const getLogin = (data) => apiResquest('/user/login',data)
//登出
export const loginOut = (data) => apiResquest('/user/loginOut',data)
//获取用户信息
export const getUserInfo = (data) => apiResquest('/user/getUserInfo',data)
//修改用户信息昵称
export const updateUserInfo = (data) => apiResquest('/user/updateUserInfo',data)
//上传用户头像
export const pushUserHeaderImg = (data) => apiResquest('/user​/pushUserHeaderImg',data)
//注册
export const getRegister = (data) => apiResquest('/user/register',data)
//发送验证码
export const getSendCode = (data) => apiResquest('/user/sendCode',data)
//首页书本列表
export const getHomePageBook = (data) => apiResquest('/book/getHomePageBook',data)
//书本详情页
export const getBookDetail = (data) => apiResquest('/book/getBookDetail',data)
//书本书页 听读
export const getBookPage = (data) => apiResquest('/book/getBookPage',data)
//书本音频记录
export const pushBookRecord = (data) => apiResquest('/userRecord/pushBookRecord',data)
//获取书本单词
export const getBookWord = (data) => apiResquest('/book/getBookWord',data)
//上传书本单词录音记录
export const pushWordRecord = (data) => apiResquest('/userRecord/pushWordRecord',data)
//获取书本quiz
export const getBookQuiz = (data) => apiResquest('/book/getBookQuiz',data)
//上传书本quiz
export const pushQuizRecord = (data) => apiResquest('/userRecord/pushQuizRecord',data)
//获取分级列表搜索字典项
export const getAZListItem = (data) => apiResquest('/item/getAZListItem',data)
// 获取书本列表
export const getBookList = (data) => apiResquest('/book/getBookList',data)
//获取字母启蒙
export const getLetterEnlightenment = (data) => apiResquest('/book/getLetterEnlightenment',data)
//上传阅读记录
export const pushBookReadRecord = (data) => apiResquest('/userRecord/pushBookReadRecord',data)
//获取期刊阅读搜索字典项
export const getJournalItem = (data) => apiResquest('/item/getJournalItem',data)
//章节阅读列表,期刊阅读列表
export const getExtensiveList = (data) => apiResquest('/extensive/getExtensiveList',data)
//章节阅读详情,期刊阅读详情
export const getExtensiveDetail = (data) => apiResquest('/extensive/getExtensiveDetail',data)
//添加磨耳朵
export const addToMoerduoList = (data) => apiResquest('/book/addToMoerduoList',data)
//删除磨耳朵
export const deleteMoerduoItem = (data) => apiResquest('/book/deleteMoerduoItem',data)
//获取书本磨耳朵列表
export const getMoerduoList = (data) => apiResquest('/book/getMoerduoList',data)
//获取书本磨耳朵详情
export const getMoerduoDetail = (data) => apiResquest('/book/getMoerduoDetail',data)
//获取电影院视频列表
export const getVideoList = (data) => apiResquest('/movie/getVideoList',data)
//获取电影院视频详情
export const getVideoDetail = (data) => apiResquest('/movie/getVideoDetail',data)
//获取电影院音乐列表
export const getMusicList = (data) => apiResquest('/movie/getMusicList',data)
//获取电影院音乐详情
export const getMusicDetail = (data) => apiResquest('/movie/getMusicDetail',data)
//根据类型获取字典项
export const getItemByType = (data) => apiResquest('/item/getItemByType',data)
//获取测评标签字典项
export const getAssessTag = (data) => apiResquest('/item/getAssessTag',data)
//获取定级测评考试ID
export const getAssessId = (data) => apiResquest('/assess/getAssessId',data)
//获取定级测评详情(保存考试记录)
export const getAssessDetail = (data) => apiResquest('/assess/getAssessDetail',data)
//提交测评结果
export const pushAssess = (data) => apiResquest('/assess/pushAssess',data)
//获取签名
export const asrParam = (data) => apiResquest('/user/asrParam',data)
//获取测评报告
export const getAssessReport = (data) => apiResquest('/assess/getAssessReport',data)
//弛声签名
export const chivoxParam = (data) => apiResquest('/user/chivoxParam',data)
//获取自然拼读列表
export const getPhonicsList = (data) => apiResquest('/phonics/getPhonicsList',data)
//获取自然拼读详情内容
export const getPhonicsDetail = (data) => apiResquest('/phonics/getPhonicsDetail',data)
//获取自然拼读产品内容
export const getPhonicsPrdList = (data) => apiResquest('/phonics/getPhonicsPrdList',data)





