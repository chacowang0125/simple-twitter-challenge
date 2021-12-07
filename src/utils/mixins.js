import moment from 'moment'

export const fromNowFilter = {
    filters: {
        fromNow(datetime) {
            return datetime ? moment(datetime).fromNow() : '-'
        }
    }
}

export const formatNumber = {
    filters: {
        formatNumber(num) {
            if (!num) {
                num = 0
            } else if (Number(num) > 1000) {
                num = (num / 1000).toFixed(1)
                num = String(num) + 'K'
            }
            return num
        },
    },
}

export const emptyImageFilter = {
    filters: {
        emptyImage(src) {
            return src || 'https://cdn-icons-png.flaticon.com/512/483/483361.png'
        }
    }
}