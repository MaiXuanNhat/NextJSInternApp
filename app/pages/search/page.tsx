"use client";
import React from "react";
import { Sidebar } from "flowbite-react";
import {
  DocumentTextIcon,
  BookOpenIcon,
  MagnifyingGlassIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import {
  BellIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import {
  Navbar,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
  Radio,
  List,
  ListItem,
  IconButton,
} from "@material-tailwind/react";
import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";
function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const navList = (
  <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <BookOpenIcon className="mr-1.5 h-5 w-5 flex-shrink-0 " />
    <BellIcon className="mr-1.5 h-5 w-5 flex-shrink-0 " />
    <QuestionMarkCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 " />
    <UserCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 " />
  </ul>
);
const TABLE_HEAD = [
  "編集",
  "顧客ID",
  "氏名",
  "氏名カナ",
  "電話番号",
  "住所",
  "メールアドレス",
  "外部会員ID",
  "性別",
];
const TABLE_ROWS = [
  {
    id: "123456789",
    name: "苗字名前",
    namekana: "ミョウジナマエ",
    phone: "0120000000",
    address: "100-0001東京都千代田区千代田",
    mail: "test@example.com",
    memberId: "未連携",
    sex: "不明",
  },
  {
    id: "123456789",
    name: "苗字名前",
    namekana: "ミョウジナマエ",
    phone: "0120000000",
    address: "100-0001東京都千代田区千代田",
    mail: "test@example.com",
    memberId: "未連携",
    sex: "不明",
  },
];
export default function Search() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="flex flex-row">
      <div className="bg-white lg-max:hidden">
        <div className="mb-2 flex items-center gap-4 p-4">
          <Typography variant="h5" color="red" className="font-bold">
            メヒウス製薬
          </Typography>
        </div>
        <div className="p-2">
          <Input
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            label="検索"
            crossOrigin={undefined}
          />
        </div>
        <Sidebar>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Collapse label="受注管理" className="font-bold">
                <Sidebar.Item className="font-bold">受注検素</Sidebar.Item>
                <Sidebar.Item className="font-bold">定期購入検索</Sidebar.Item>
                <Sidebar.Item className="font-bold">定期取込検索</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse
                label="顧客管理"
                className="font-bold"
              ></Sidebar.Collapse>
              <Sidebar.Collapse
                label="商品管理"
                className="font-bold"
              ></Sidebar.Collapse>
              <Sidebar.Collapse
                label="出荷管理"
                className="font-bold"
              ></Sidebar.Collapse>
              <Sidebar.Collapse
                label="請求管理"
                className="font-bold"
              ></Sidebar.Collapse>
              <Sidebar.Collapse
                label="入金管理"
                className="font-bold"
              ></Sidebar.Collapse>
              <Sidebar.Collapse
                label="売上管理"
                className="font-bold"
              ></Sidebar.Collapse>
              <Sidebar.Collapse
                label="出荷設定"
                className="font-bold"
              ></Sidebar.Collapse>
              <Sidebar.Collapse
                label="システム管理"
                className="font-bold"
              ></Sidebar.Collapse>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="bg-white p-8">
        <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4  ">
          <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
            <div className="flex flex-row justify-between">
              <Typography
                as="a"
                href="#"
                className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
              >
                顧客検索
              </Typography>
              <DocumentTextIcon className="mt-2 ml-2 flex items-center text-sm mr-1.5 h-5 w-5 flex-shrink-0 " />
            </div>
            <div className="hidden lg:block">{navList}</div>
          </div>
        </Navbar>
        <div
          className="flex flex-row mt-6 p-4 mb-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
          role="alert"
        >
          <div className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <p className="text-sm font-medium text-black">
              サーバ負荷対策のため、現在CSV出力件数を制限させていただいております。
              エラーが発生した場合、お手数ですが、件数を減らして（3000件程度）再度ダウンロードお願いいたします。
            </p>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            新規登録
          </button>
        </div>
        <div>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              検索条件
            </AccordionHeader>
            <AccordionBody>
              <form className="mt-4 mb-2 justify-start">
                <div className="mb-1 flex flex-col gap-6">
                  <div className="grid grid-cols-4 gap-4  ">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64  "
                    >
                      願客ID
                    </Typography>
                    <Input
                      size="lg"
                      placeholder=""
                      className="lg:w-64 !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      crossOrigin={undefined}
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-4 ">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64 "
                    >
                      氏名/カナ
                    </Typography>
                    <Input
                      size="lg"
                      placeholder=""
                      className="lg:w-64  !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      crossOrigin={undefined}
                    />
                    <div className="lg:w-64">
                      <Select label="完全一致" size="lg">
                        <Option>1</Option>
                        <Option>2</Option>
                        <Option>3</Option>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 ">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      電話番号
                    </Typography>
                    <Input
                      size="lg"
                      placeholder=""
                      className=" lg:w-64 !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      crossOrigin={undefined}
                    />
                    <div className="lg:w-64">
                      <Select label="完全一致" size="lg">
                        <Option>1</Option>
                        <Option>2</Option>
                        <Option>3</Option>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 ">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      住所
                    </Typography>
                    <Input
                      size="lg"
                      placeholder=""
                      className=" lg:w-64 !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      crossOrigin={undefined}
                    />
                    <div className="lg:w-64">
                      <Select label="前方一致" size="lg">
                        <Option>1</Option>
                        <Option>2</Option>
                        <Option>3</Option>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 ">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      メールアドレス
                    </Typography>
                    <Input
                      size="lg"
                      placeholder=""
                      className="lg:w-64  !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      crossOrigin={undefined}
                    />
                    <div className="lg:w-64">
                      <Select label="前方一致" size="lg">
                        <Option>1</Option>
                        <Option>2</Option>
                        <Option>3</Option>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      外部会員連携
                    </Typography>
                    <div className="col-span-3 justify-start">
                      <Radio
                        defaultChecked
                        name="externalMemberCollaboration"
                        label="全て"
                        crossOrigin={undefined}
                      />
                      <Radio
                        name="externalMemberCollaboration"
                        label="連携"
                        crossOrigin={undefined}
                      />
                      <Radio
                        name="externalMemberCollaboration"
                        label="未連携"
                        crossOrigin={undefined}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4  ">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      外部会員旧
                    </Typography>
                    <Input
                      size="lg"
                      placeholder=""
                      className=" lg:w-64 !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      crossOrigin={undefined}
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      性別
                    </Typography>
                    <div className="col-span-3 justify-start">
                      <Checkbox
                        name="type"
                        label="全て"
                        crossOrigin={undefined}
                      />
                      <Checkbox
                        name="type"
                        label="男性"
                        crossOrigin={undefined}
                      />
                      <Checkbox
                        name="type"
                        label="女性"
                        crossOrigin={undefined}
                      />
                      <Checkbox
                        name="type"
                        label="不明"
                        crossOrigin={undefined}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4  ">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      生年月日
                    </Typography>
                    <div className="border border-black rounded-md flex flex-row justify-between lg:w-64">
                      <Flatpickr
                        className="focus: outline-none ml-4 "
                        options={{
                          dateFormat: "Y/m/d",
                          mode: "single",
                          defaultDate: ["1990/01/01"],
                        }}
                      />
                      <IconButton variant="text">
                        <XMarkIcon className="h-4 w-4" />
                      </IconButton>
                    </div>
                    <div className="flex ">
                      <p className="text-2xl mr-3 mt-1">~</p>
                      <div className="border border-black rounded-md flex flex-row">
                        <Flatpickr
                          className="focus: outline-none ml-4 "
                          options={{
                            dateFormat: "Y/m/d",
                            mode: "single",
                            defaultDate: ["today"],
                          }}
                        />
                        <IconButton variant="text">
                          <XMarkIcon className="h-4 w-4" />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 ">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      マーケティングランク
                    </Typography>
                    <div className="lg:w-64">
                      <List className="border border-slate-300 rounded-lg border-black">
                        <ListItem>VIP</ListItem>
                        <ListItem>F1</ListItem>
                        <ListItem>F2</ListItem>
                      </List>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4  ">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      顧客ランク
                    </Typography>
                    <div className="lg:w-64">
                      <List className="border border-slate-300 rounded-lg border-black">
                        <ListItem>ゴールド</ListItem>
                        <ListItem>シルバー</ListItem>
                        <ListItem>プロンズ</ListItem>
                      </List>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4  ">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      初回購入
                    </Typography>
                    <div className="border border-black rounded-md flex flex-row lg:w-64 justify-between">
                      <Flatpickr
                        className="focus: outline-none ml-4 "
                        options={{
                          dateFormat: "Y/m/d",
                          mode: "single",
                          defaultDate: ["1990/01/01"],
                        }}
                      />
                      <IconButton variant="text">
                        <XMarkIcon className="h-4 w-4" />
                      </IconButton>
                    </div>
                    <div className="flex flex-cols">
                      <p className="text-2xl mr-3 mt-1">~</p>
                      <div className="border border-black rounded-md flex flex-row justify-between">
                        <Flatpickr
                          className="focus: outline-none ml-4 "
                          options={{
                            dateFormat: "Y/m/d",
                            mode: "single",
                            defaultDate: ["today"],
                          }}
                        />
                        <IconButton variant="text">
                          <XMarkIcon className="h-4 w-4" />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4  ">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      初回受付媒体
                    </Typography>
                    <div className="lg:w-64">
                      <List className="border border-slate-300 rounded-lg border-black">
                        <ListItem>INTイン</ListItem>
                      </List>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      返信メール設定
                    </Typography>
                    <div className="col-span-3 justify-start">
                      <Radio
                        name="replyEmailSettings"
                        label="全て"
                        defaultChecked
                        crossOrigin={undefined}
                      />
                      <Radio
                        name="replyEmailSettings"
                        label="送信OK (受取)"
                        crossOrigin={undefined}
                      />
                      <Radio
                        name="replyEmailSettings"
                        label="送信拒否(拒否)"
                        crossOrigin={undefined}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      情報メール設定
                    </Typography>
                    <div className="col-span-3 justify-start">
                      <Radio
                        name="informationEmailSettings"
                        label="全て"
                        defaultChecked
                        crossOrigin={undefined}
                      />
                      <Radio
                        name="informationEmailSettings"
                        label="送信OK (受取)"
                        crossOrigin={undefined}
                      />
                      <Radio
                        name="informationEmailSettings"
                        label="送信拒否(拒否)"
                        crossOrigin={undefined}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      受注保留条件設定
                    </Typography>
                    <div className="col-span-3 justify-start">
                      <Radio
                        name="orderHoldConditionSetting"
                        label="全て"
                        defaultChecked
                        crossOrigin={undefined}
                      />
                      <Radio
                        name="orderHoldConditionSetting"
                        label="「強制的に受注保留にする」設定中"
                        crossOrigin={undefined}
                      />
                      <Radio
                        name="orderHoldConditionSetting"
                        label="「受注保留条件に準する」設定中"
                        crossOrigin={undefined}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      取引停止設定
                    </Typography>
                    <div className="col-span-3 justify-start">
                      <Radio
                        name="tradingStopSetting"
                        label="全て"
                        defaultChecked
                        crossOrigin={undefined}
                      />
                      <Radio
                        name="tradingStopSetting"
                        label="停止中"
                        crossOrigin={undefined}
                      />
                      <Radio
                        name="tradingStopSetting"
                        label="通常"
                        crossOrigin={undefined}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 ">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      顧客メモ
                    </Typography>
                    <Input
                      size="lg"
                      placeholder=""
                      className="lg:w-64  !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      crossOrigin={undefined}
                    />
                    <div className="lg:w-64">
                      <Select label="前方一致" size="lg">
                        <Option>1</Option>
                        <Option>2</Option>
                        <Option>3</Option>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      顧客シャッター
                    </Typography>
                    <div className="col-span-3 justify-start">
                      <Radio
                        name="customerShutter"
                        label="全て"
                        defaultChecked
                        crossOrigin={undefined}
                      />
                      <Radio
                        name="customerShutter"
                        label="表示設定中"
                        crossOrigin={undefined}
                      />
                      <Radio
                        name="customerShutter"
                        label="未設定"
                        crossOrigin={undefined}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4  ">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      顧客状態
                    </Typography>
                    <div className="lg:w-64">
                      <List className="border border-slate-300 rounded-lg border-black">
                        <ListItem>通常</ListItem>
                        <ListItem>個人情報削除</ListItem>
                        <ListItem>ブラック</ListItem>
                        <ListItem>貸倒予定者</ListItem>
                      </List>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      カード登録
                    </Typography>
                    <div className="col-span-3 justify-start">
                      <Radio
                        name="cardRegistration"
                        label="全て"
                        defaultChecked
                        crossOrigin={undefined}
                      />
                      <Radio
                        name="cardRegistration"
                        label="有効力ードあり"
                        crossOrigin={undefined}
                      />
                      <Radio
                        name="cardRegistration"
                        label="有効力ードなし"
                        crossOrigin={undefined}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      定期購入
                    </Typography>
                    <div className="col-span-3 justify-start">
                      <Radio
                        name="regularPurchase"
                        label="全て"
                        defaultChecked
                        crossOrigin={undefined}
                      />
                      <Radio
                        name="regularPurchase"
                        label="定期購入あり"
                        crossOrigin={undefined}
                      />
                      <Radio
                        name="regularPurchase"
                        label="定期購入なし"
                        crossOrigin={undefined}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4  ">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      登録日
                    </Typography>
                    <div className="border border-black rounded-md flex flex-row lg:w-64 justify-between">
                      <Flatpickr
                        className="focus: outline-none ml-4 "
                        options={{
                          dateFormat: "Y/m/d",
                          mode: "single",
                          defaultDate: ["1990/01/01"],
                        }}
                      />
                      <IconButton variant="text">
                        <XMarkIcon className="h-4 w-4" />
                      </IconButton>
                    </div>
                    <div className="flex flex-cols">
                      <p className="text-2xl mr-3 mt-1">~</p>
                      <div className="border border-black rounded-md flex flex-row">
                        <Flatpickr
                          className="focus: outline-none ml-4 "
                          options={{
                            dateFormat: "Y/m/d",
                            mode: "single",
                            defaultDate: ["today"],
                          }}
                        />
                        <IconButton variant="text">
                          <XMarkIcon className="h-4 w-4" />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4  ">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 lg:w-64"
                    >
                      個人情報削除日
                    </Typography>
                    <div className="border border-black rounded-md flex flex-row lg:w-64 justify-between">
                      <Flatpickr
                        className="focus: outline-none ml-4 "
                        options={{
                          dateFormat: "Y/m/d",
                          mode: "single",
                          defaultDate: ["1990/01/01"],
                        }}
                      />
                      <IconButton variant="text">
                        <XMarkIcon className="h-4 w-4" />
                      </IconButton>
                    </div>
                    <div className="flex flex-cols">
                      <p className="text-2xl mr-3 mt-1">~</p>
                      <div className="border border-black rounded-md flex flex-row">
                        <Flatpickr
                          className="focus: outline-none ml-4 "
                          options={{
                            dateFormat: "Y/m/d",
                            mode: "single",
                            defaultDate: ["today"],
                          }}
                        />
                        <IconButton variant="text">
                          <XMarkIcon className="h-4 w-4" />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-end mt-6">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3 w-28 mt-2 ml-2 font-semibold flex items-center text-sm h-5 flex-shrink-0"
                    >
                      検索結果表示件数
                    </Typography>
                    <div className="">
                      <Select label="数量" size="lg">
                        <Option>5</Option>
                        <Option>10</Option>
                        <Option>15</Option>
                      </Select>
                    </div>
                    <p className="mt-2 -ml-2 font-semibold flex items-center text-sm mr-1.5 h-5 w-1 flex-shrink-0">
                      件
                    </p>
                    <Button
                      variant="outlined"
                      color="blue"
                      className="rounded-full"
                    >
                      クリア
                    </Button>
                    <Button color="blue" className="rounded-full">
                      この条件で検索する
                    </Button>
                  </div>
                </div>
              </form>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              検索結果: 2 件
            </AccordionHeader>
            <AccordionBody>
              <table className="w-full min-w-max table-auto text-left border-collapse">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border border-slate-300 border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="black"
                          className="font-bold"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map(
                    (
                      {
                        id,
                        name,
                        namekana,
                        phone,
                        address,
                        mail,
                        memberId,
                        sex,
                      },
                      index
                    ) => {
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast
                        ? "p-4 border border-slate-300"
                        : "p-4 border border-slate-300 border-b border-blue-gray-50";
                      return (
                        <tr key={name}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              <IconButton variant="text">
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </div>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {id}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {namekana}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {phone}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {address}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {mail}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {memberId}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {sex}
                            </Typography>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
              <div className="flex items-center justify-center gap-2 border-t border-blue-gray-50 p-4">
                <IconButton size="sm" color="blue-gray">
                  <ChevronLeftIcon className="h-4 w-4" />
                </IconButton>
                <IconButton size="sm" color="blue">
                  1
                </IconButton>
                <IconButton size="sm" color="blue-gray">
                  2
                </IconButton>
                <IconButton size="sm" color="blue-gray">
                  3
                </IconButton>
                <IconButton size="sm" color="blue-gray">
                  4
                </IconButton>
                <IconButton size="sm" color="blue-gray">
                  5
                </IconButton>
                <IconButton size="sm" color="blue-gray">
                  <ChevronRightIcon className="h-4 w-4" />
                </IconButton>
              </div>
              <div className="flex items-center justify-center">1/1ページ</div>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
