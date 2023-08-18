
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe } from "node:test";
import HomePage from "@/app/home/page";
import { useRouter } from "next/router";

// import { filterFunction,sortFunction } from "@/app/home/page";
 // filter and sort function
 export const filterFunction = (movies: Movie[], filters: string[]): Movie[] => {
  let filteredMovies: Movie[] = movies.filter((movie) => {
    let fetchedCategories = movie.categories.filter((category) => {
      return filters.includes(category.title_en);
    });
    if (fetchedCategories.length !== 0) {
      return true;
    }
    return false;
  });
  return filteredMovies;
};
export const sortFunction = (movies: Movie[], sortType: string): Movie[] => {
  let sortedList:Movie[] = [...movies];
  sortedList.sort((movie1, movie2) => {
    return (
      parseFloat(movie1.rate_avrage) - parseFloat(movie2.rate_avrage)
    );
  });
  if (sortType !== "desc") {
    sortedList.reverse();
  }
  return sortedList;
};

import { Movie } from "@/types/movie";
const mockMovieList: Movie[] = [
  {
    type: "movies",
    id: "133615",
    link_type: "movie",
    link_key: "yon1h",
    theme: "thumbnail",
    output_type: "movie",
    movie_id: "133615",
    uid: "yon1h",
    movie_title: "ایران، روز دوم",
    movie_title_en: "Iran, 2nd Day",
    tag_id: "1000053",
    serial: {
      enable: false,
      parent_title: "",
      season_id: 0,
      serial_part: "",
      part_text: "",
      season_text: "",
      last_part: "",
    },
    watermark: true,
    HD: true,
    watch_list_action: "watch",
    commingsoon_txt: "",
    rel_data: {
      rel_type: "none",
      rel_id: "",
      rel_uid: null,
      rel_title: null,
      rel_type_txt: "",
    },
    badge: {
      free: false,
      backstage: false,
      vision: false,
      hear: false,
      online_release: false,
      exclusive: false,
      commingsoon: false,
      info: [],
    },
    rate_enable: true,
    rate_enable_by_cnt: true,
    descr:
      "دختر بچه ای از مدرسه تعطیل شده است و کسی نیست که به دنبال او بیاید. روایت دو روز از زندگی او را می‌بینیم که باعث تغییر سرنوشتش می‌شود...",
    cover: "https://static.cdn.asset.filimo.com/flmt/mov_cvr_133615_949.jpg",
    publish_date: "2023-04-19 00:00:00",
    age_range: "15-18",
    pic: {
      movie_img_s:
        "https://static.cdn.asset.filimo.com/flmt/mov_133615_56186-s.jpg",
      movie_img_m:
        "https://static.cdn.asset.filimo.com/flmt/mov_133615_56186-m.jpg",
      movie_img_b:
        "https://static.cdn.asset.filimo.com/flmt/mov_133615_56186-b.jpg",
    },
    rate_avrage: "3.58",
    avg_rate_label: "72%",
    pro_year: "1398",
    imdb_rate: "0.00",
    categories: [
      {
        title_en: "drama",
        title: "درام",
        link_type: "list",
        link_key: "drama",
      },
      {
        title_en: "family",
        title: "خانوادگی",
        link_type: "list",
        link_key: "family",
      },
    ],
    duration: {
      value: 898,
      text: " و 14 دقیقه",
    },
    countries: [
      {
        country: "ایران",
        country_en: "iran",
      },
    ],
    dubbed: {
      enable: false,
      text: "",
    },
    subtitle: {
      enable: false,
      text: "",
    },
    audio: {
      languages: ["fa"],
      isMultiLanguage: false,
    },
    language_info: {
      flag: "hasSubtitle",
      text: "زیرنویس دارد",
    },
    director: "کیانا منتجبی",
    last_watch: null,
    freemium: false,
    position: null,
    sid: null,
    uuid: null,
  },
  {
    type: "movies",
    id: "133209",
    link_type: "movie",
    link_key: "7uet9",
    theme: "thumbnail",
    output_type: "movie",
    movie_id: "133209",
    uid: "7uet9",
    movie_title: "جنجال در خانه",
    movie_title_en: "Commotion at Home",
    tag_id: "1000053",
    serial: {
      enable: false,
      parent_title: "",
      season_id: 0,
      serial_part: "",
      part_text: "",
      season_text: "",
      last_part: "",
    },
    watermark: true,
    HD: true,
    watch_list_action: "watch",
    commingsoon_txt: "",
    rel_data: {
      rel_type: "none",
      rel_id: "",
      rel_uid: null,
      rel_title: null,
      rel_type_txt: "",
    },
    badge: {
      free: false,
      backstage: false,
      vision: false,
      hear: false,
      online_release: false,
      exclusive: false,
      commingsoon: false,
      info: [],
    },
    rate_enable: true,
    rate_enable_by_cnt: true,
    descr:
      "اعلا مدیری متشخص و موفق است که در کارش نیز موفق می باشد اما او در خانه و بین خانواده بسیار مظلوم است.\r\nاو توسط دوستش حسام با انجمنی آشنا می شود که آموزش این مردان را بر عهده دارد. حضور اعلا در این انجمن و شرکت در این کلاسها و روبرو شدن با دوستان جدید ماجرا و مشکلاتی برایش به وجود می آورد تا ...",
    cover: "https://static.cdn.asset.filimo.com/flmt/mov_cvr_133209_460.jpg",
    publish_date: "2023-04-09 00:00:00",
    age_range: "18-99",
    pic: {
      movie_img_s:
        "https://static.cdn.asset.filimo.com/flmt/mov_133209_55749-s.jpg",
      movie_img_m:
        "https://static.cdn.asset.filimo.com/flmt/mov_133209_55749-m.jpg",
      movie_img_b:
        "https://static.cdn.asset.filimo.com/flmt/mov_133209_55749-b.jpg",
    },
    rate_avrage: "2.67",
    avg_rate_label: "54%",
    pro_year: "1400",
    imdb_rate: "0.00",
    categories: [
      {
        title_en: "drama",
        title: "درام",
        link_type: "list",
        link_key: "drama",
      },
      {
        title_en: "family",
        title: "خانوادگی",
        link_type: "list",
        link_key: "family",
      },
    ],
    duration: {
      value: 5353,
      text: "یک ساعت و 29 دقیقه",
    },
    countries: [
      {
        country: "ایران",
        country_en: "iran",
      },
    ],
    dubbed: {
      enable: false,
      text: "",
    },
    subtitle: {
      enable: false,
      text: "",
    },
    audio: {
      languages: ["fa"],
      isMultiLanguage: false,
    },
    language_info: {
      flag: "hasSubtitle",
      text: "زیرنویس دارد",
    },
    director: "محمد کریمی",
    last_watch: null,
    freemium: false,
    position: null,
    sid: null,
    uuid: null,
  },
  {
    type: "movies",
    id: "133208",
    link_type: "movie",
    link_key: "c3x4a",
    theme: "thumbnail",
    output_type: "movie",
    movie_id: "133208",
    uid: "c3x4a",
    movie_title: "ودا",
    movie_title_en: "Veda",
    tag_id: "1000053",
    serial: {
      enable: false,
      parent_title: "",
      season_id: 0,
      serial_part: "",
      part_text: "",
      season_text: "",
      last_part: "",
    },
    watermark: true,
    HD: true,
    watch_list_action: "watch",
    commingsoon_txt: "",
    rel_data: {
      rel_type: "none",
      rel_id: "",
      rel_uid: null,
      rel_title: null,
      rel_type_txt: "",
    },
    badge: {
      free: false,
      backstage: false,
      vision: false,
      hear: false,
      online_release: false,
      exclusive: false,
      commingsoon: false,
      info: [],
    },
    rate_enable: true,
    rate_enable_by_cnt: true,
    descr:
      "تمامی اتفاقات فیلم در یک خانه قدیمی و مرموز رخ می دهد. مردی با مرور خاطرات و کابوس هایش متوجه می شود هیچ چیز آنطور که در این خانه به نظر می رسد نیست و حقیقت وحشتناک تر از آن کابوس هایی است که می بیند.",
    cover: "https://static.cdn.asset.filimo.com/flmt/mov_cvr_133208_622.jpg",
    publish_date: "2023-04-09 00:00:00",
    age_range: "15-18",
    pic: {
      movie_img_s:
        "https://static.cdn.asset.filimo.com/flmt/mov_133208_55686-s.jpg",
      movie_img_m:
        "https://static.cdn.asset.filimo.com/flmt/mov_133208_55686-m.jpg",
      movie_img_b:
        "https://static.cdn.asset.filimo.com/flmt/mov_133208_55686-b.jpg",
    },
    rate_avrage: "3.43",
    avg_rate_label: "69%",
    pro_year: "1400",
    imdb_rate: "0.00",
    categories: [
      {
        title_en: "drama",
        title: "درام",
        link_type: "list",
        link_key: "drama",
      },
      {
        title_en: "family",
        title: "خانوادگی",
        link_type: "list",
        link_key: "family",
      },
    ],
    duration: {
      value: 1240,
      text: " و 20 دقیقه",
    },
    countries: [
      {
        country: "ایران",
        country_en: "iran",
      },
    ],
    dubbed: {
      enable: false,
      text: "",
    },
    subtitle: {
      enable: false,
      text: "",
    },
    audio: {
      languages: ["fa"],
      isMultiLanguage: false,
    },
    language_info: {
      flag: "hasSubtitle",
      text: "زیرنویس دارد",
    },
    director: "داریوش جعفری",
    last_watch: null,
    freemium: false,
    position: null,
    sid: null,
    uuid: null,
  },
  {
    type: "movies",
    id: "124679",
    link_type: "movie",
    link_key: "dbquc",
    theme: "thumbnail",
    output_type: "movie",
    movie_id: "124679",
    uid: "dbquc",
    movie_title: "شریک زندگی",
    movie_title_en: "Significant Other",
    tag_id: "1000059",
    serial: {
      enable: false,
      parent_title: "",
      season_id: 0,
      serial_part: "",
      part_text: "",
      season_text: "",
      last_part: "",
    },
    watermark: true,
    HD: true,
    watch_list_action: "watch",
    commingsoon_txt: "",
    rel_data: {
      rel_type: "none",
      rel_id: "",
      rel_uid: null,
      rel_title: null,
      rel_type_txt: "",
    },
    badge: {
      free: false,
      backstage: false,
      vision: false,
      hear: false,
      online_release: false,
      exclusive: false,
      commingsoon: false,
      info: [],
    },
    rate_enable: true,
    rate_enable_by_cnt: true,
    descr:
      "«شریک زندگی»، عرضه شده بر پلتفرم پارامونت پلاس، داستان زوج جوانی است که با پای پیاده و کوله پشتی به منطقه ای دورافتاده در شمال غربی اقیانوس آرام می روند. آن دو وقایع شومی را از سر می گذرانند و متوجه می شوند که هیچ چیز آنجا آنطور که به نظر می رسد نیست.",
    cover: "https://static.cdn.asset.filimo.com/flmt/mov_cvr_124679_968.jpg",
    publish_date: "2022-10-07 22:20:00",
    age_range: "18-99",
    pic: {
      movie_img_s:
        "https://static.cdn.asset.filimo.com/flmt/mov_124679_45379-s.jpg",
      movie_img_m:
        "https://static.cdn.asset.filimo.com/flmt/mov_124679_45379-m.jpg",
      movie_img_b:
        "https://static.cdn.asset.filimo.com/flmt/mov_124679_45379-b.jpg",
    },
    rate_avrage: "3.26",
    avg_rate_label: "66%",
    pro_year: "2022",
    imdb_rate: "5.70",
    categories: [
      {
        title_en: "drama",
        title: "درام",
        link_type: "list",
        link_key: "drama",
      },
      {
        title_en: "sci-fi",
        title: "علمی تخیلی",
        link_type: "list",
        link_key: "sci-fi",
      },
    ],
    duration: {
      value: 4947,
      text: "یک ساعت و 22 دقیقه",
    },
    countries: [
      {
        country: "آمریکا",
        country_en: "america",
      },
    ],
    dubbed: {
      enable: false,
      text: "",
    },
    subtitle: {
      enable: true,
      text: "زیرنویس دارد",
    },
    audio: {
      languages: ["en"],
      isMultiLanguage: false,
    },
    language_info: {
      flag: "hasSubtitle",
      text: "زیرنویس دارد",
    },
    director: "Dan Berk - Robert Olsen",
    last_watch: null,
    freemium: false,
    position: null,
    sid: null,
    uuid: null,
  },
]


jest.mock('next/router', () => ({
    useRouter(){
      return {
        route: '/home',
        pathname: '',
        query: '',
        asPath: "/home",
        push:jest.fn(),
      }
    }
  }))
  
jest.spyOn(require('next/router'),'useRouter')
  
describe("Home Page", () => {

    (useRouter as jest.Mock).mockImplementation(() => ({   
        useRouter(){
          return {
            route: '/home',
            pathname: '',
            query: '',
            asPath: "/home",
            push:jest.fn(),
          }
        }
    }))
    
    
    it("render home page", () => {
        // render(<ReduxProvider><HomePage/></ReduxProvider>)
    })
  
  it("filterFunction empty input", () => {
     expect(filterFunction([],["drama"]).length).toBe(0)
  })

  it("filterFunction with empty filter list", () => {
    expect(filterFunction(mockMovieList,[]).length).toBe(0)
  })
  
  it("filterFunction with drama filter", () => {
    expect(filterFunction(mockMovieList,['drama']).length).toBe(4)
  })
  
  it("filterFunction with sci-fi filter", () => {
    expect(filterFunction(mockMovieList,['sci-fi']).length).toBe(1)
 })

  
 it("filterFunction with drama&sci-fi filter", () => {
  expect(filterFunction(mockMovieList,['sci-fi','drama']).length).toBe(4)
 })
  
  it("sortFunction with asc type", () => {
    let soretdResult = sortFunction(mockMovieList,"asc")
    let firstResult = soretdResult[0]
    let lastResult = soretdResult[soretdResult.length-1]
    expect(firstResult.rate_avrage).toBe("3.58")
    expect(lastResult.rate_avrage).toBe("2.67")
  })
  
  it("sortFunction with desc type", () => {
    let soretdResult = sortFunction(mockMovieList,"desc")
    let firstResult = soretdResult[0]
    let lastResult = soretdResult[soretdResult.length-1]
    expect(firstResult.rate_avrage).toBe("2.67")
    expect(lastResult.rate_avrage).toBe("3.58")
})



})