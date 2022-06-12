/*
 * @Description: 全局字典过滤函数
 * @Version: 0.1
 * @Autor: fulei
 */
import Vue from "vue"
import { formatLabelByLocalCode } from "@/utils/dictionary"

import { dayFormat } from "@/utils/dayjs"

Vue.filter("dayFormat", dayFormat)
Vue.filter("formatLabelByLocalCode", formatLabelByLocalCode)