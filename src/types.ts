export type CameraApi = {
  capture: () => Promise<{ uri: string }>,
  requestDeviceCameraAuthorization: () => Promise<boolean>,
  checkDeviceCameraAuthorizationStatus: () => Promise<boolean>,
};

export interface ReadCodeEvent {
  codeStringValue: string,
  codeFormat: number,
  codeType: number
}

export enum BarcodeFormat {
  FORMAT_AZTEC = 4096,
  FORMAT_CODABAR = 8,
  FORAMT_CODE_128 = 1,
  FORMAT_CODE_39 = 2,
  FORMAT_CODE_93 = 4,
  FORMAT_DATA_MATRIX = 16,
  FORMAT_EAN_13 = 32,
  FORMAT_EAN_8 = 64,
  FORMAT_ITF = 128,
  FORMAT_PDF417 = 2048,
  FORMAT_QR_CODE = 256,
  FORMAT_UNKNOWN = -1,
  FORMAT_UPC_A = 512,
  FORMAT_UPC_E = 1024,
}

export enum BarcodeValueType {
  TYPE_CALENDAR_EVENT = 11,
  TYPE_CONTACT_INFO = 1,
  TYPE_DRIVER_LICENSE = 12,
  TYPE_EMAIL = 2,
  TYPE_GEO = 10,
  TYPE_ISBN = 3,
  TYPE_PHONE = 4,
  TYPE_PRODUCT = 5,
  TYPE_SMS = 6,
  TYPE_TEXT = 7,
  TYPE_UNKNOWN = 0,
  TYPE_URL = 8,
  TYPE_WIFI = 9
}
