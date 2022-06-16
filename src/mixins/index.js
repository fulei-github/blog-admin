/*
 * @Description: 常用mixin混入
 * @Date: 2022-06-12 21:14:33
 * @Version: 0.1
 * @Autor: fulei
 * @LastEditors: fulei
 * @LastEditTime: 2022-06-16 11:10:40
 */
import { formatLabelByLocalCode } from "@/utils/dictionary"
import { validateUserNameFn, validatePassWordFn } from "@/utils/check"
import { dayFormat } from "@/utils/dayjs"

export default {
  methods: {
    formatLabelByLocalCode,
    dayFormat,
    validateUserNameFn,
    validatePassWordFn
  }
}