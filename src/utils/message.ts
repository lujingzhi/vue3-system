import { message } from 'ant-design-vue'

const InfoMsg = (msg: string) => message.info(msg)

const SuccessMsg = (msg: string) => message.success(msg)

const ErrorMsg = (msg: string) => message.error(msg)

const WarningMsg = (msg: string) => message.warning(msg)

export {
  InfoMsg,
  SuccessMsg,
  ErrorMsg,
  WarningMsg,
}
