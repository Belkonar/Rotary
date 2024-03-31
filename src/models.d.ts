interface Alert {
    message: string;
    type: AlertColor;
    autoHide?: boolean;
}

interface InnerAlert extends Alert {
    _id: string;
}
