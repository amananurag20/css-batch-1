/** 
* Paste one or more documents here
*/
{
  "serviceType": "venue",
  "userId": {
    "$oid": "6842c35b4102ba130f06bdb9"
  },
  "eventType": {
    "$oid": "67a9ee732fb40f5337c28916"
  },
  "cuisines": [
    {
      "$oid": "67ac7d292ee4b070bd485696"
    },
    {
      "$oid": "6818bdb62ff85254568198a4"
    }
  ],
  "menuSections": [
    {
      "categoryId": "6818bbf52ff8525456819800",
      "name": "Pizza",
      "total": 1,
      "count": {
        "Vegetarian": 1,
        "Non-Vegetarian": 0,
        "Paneer": 0
      },
      "subcategoriesByCuisine": {},
      "items": [
        {
          "id": "6826c675c458933ce1a8c923",
          "name": "Margherita Pizza",
          "description": "Classic thin-crust pizza topped with tangy tomato sauce, fresh mozzarella, and basil leaves.",
          "itemTypes": [
            "Vegetarian"
          ]
        }
      ]
    },
    {
      "categoryId": "6818bbf52ff85254568197fc",
      "name": "Main Course",
      "total": 1,
      "count": {},
      "subcategoriesByCuisine": {
        "North Indian": [
          {
            "subcategoryId": "6818bbf52ff8525456819806",
            "name": "Vegetarian Main Course",
            "total": 1,
            "count": {
              "Vegetarian": 1,
              "Non-Vegetarian": 0,
              "Paneer": 0
            },
            "maxCount": {},
            "maxTotal": 0,
            "items": [
              {
                "id": "6826c675c458933ce1a8c924",
                "name": "Palak Paneer",
                "description": "Wholesome spinach puree cooked with cottage cheese cubes, garlic, and aromatic spices.",
                "itemTypes": [
                  "Vegetarian"
                ]
              }
            ]
          }
        ]
      },
      "items": []
    }
  ],
  "restaurant_id": [],
  "status": "Draft",
  "peopleRange": {
    "minPeople": 10,
    "maxPeople": 50
  },
  "budget": {
    "min": 50000,
    "max": 75000
  },
  "services": [],
  "selectedCities": [
    {
      "name": "F-7, Phase-8, Industrial Area, Sector 73, Sahibzada Ajit Singh Nagar, Punjab 160071, India",
      "latitude": 30.7102468,
      "longitude": 76.7064584,
      "locality": {
        "short_name": "SAS Nagar",
        "long_name": "Sahibzada Ajit Singh Nagar"
      },
      "subLocality": {
        "short_name": "Sector 73",
        "long_name": "Sector 73"
      }
    }
  ],
  "location": {
    "latitude": 30.7102468,
    "longitude": 76.7064584
  },
  "radius": "25",
  "eventDate": [
    {
      "2025-06-25": "06:30 - 22:30"
    }
  ],
  "eventDateOptions": {
    "preferredDates": [
      {
        "2025-06-25": "06:30 - 22:30"
      }
    ],
    "alternateDates": []
  },
  "dietaryRequirements": [],
  "variants": [],
  "budgetType": "perPerson",
  "isSaved": [],
  "matched": [
    [
      {
        "item_popularity": {
          "items": [
            {
              "average_quantity_per_variant": 4,
              "category": "General",
              "cuisine": "General",
              "item_id": "General|General|General|Vegetarian",
              "item_name": "Vegetarian",
              "popularity_percentage": 100,
              "subcategory": "General",
              "total_quantity_across_variants": 8,
              "variants_count": 2
            },
            {
              "average_quantity_per_variant": 1,
              "category": "General",
              "cuisine": "General",
              "item_id": "General|General|General|Non-Vegetarian",
              "item_name": "Non-Vegetarian",
              "popularity_percentage": 50,
              "subcategory": "General",
              "total_quantity_across_variants": 1,
              "variants_count": 1
            },
            {
              "average_quantity_per_variant": 1,
              "category": "General",
              "cuisine": "General",
              "item_id": "General|General|General|Non-Alcoholic",
              "item_name": "Non-Alcoholic",
              "popularity_percentage": 50,
              "subcategory": "General",
              "total_quantity_across_variants": 1,
              "variants_count": 1
            }
          ],
          "total_unique_items": 3,
          "total_variants": 2
        },
        "matched_variants": 2,
        "matches": [
          {
            "match_percentage": 100,
            "over_100_categories": {},
            "package_id": "682ac689598e7130ebc681f4",
            "price": 1200,
            "service_match_percentage": 100,
            "unmet_requirements": [],
            "unmet_services": [],
            "variant_id": "6835deb59fb702a8df2a7333",
            "variant_name": "Birthday for Adults",
            "venue_id": "6818aa2160c1ed42e9866300"
          },
          {
            "match_percentage": 0,
            "over_100_categories": {},
            "package_id": "682ac689598e7130ebc681f4",
            "price": 1200,
            "service_match_percentage": 0,
            "unmet_requirements": [
              {
                "available": 0,
                "category": "Main Course",
                "cuisine": "North Indian",
                "item_type": "Non-Vegetarian",
                "level": "item",
                "message": "Insufficient Non-Vegetarian in Non-Vegetarian Main Course: need 1, have 0",
                "requested": 1,
                "shortfall": 1,
                "subcategory": "Non-Vegetarian Main Course"
              },
              {
                "available": 0,
                "category": "Starters",
                "cuisine": "Chinese",
                "item_type": "Vegetarian",
                "level": "item",
                "message": "Insufficient Vegetarian in Vegetarian Starters: need 1, have 0",
                "requested": 1,
                "shortfall": 1,
                "subcategory": "Vegetarian Starters"
              },
              {
                "available": 0,
                "category": "Beverages",
                "cuisine": "Other",
                "item_type": "Non-Alcoholic",
                "level": "item",
                "message": "Insufficient Non-Alcoholic in Hot Beverages: need 1, have 0",
                "requested": 1,
                "shortfall": 1,
                "subcategory": "Hot Beverages"
              }
            ],
            "unmet_services": [
              {
                "is_paid": false,
                "name": "kids’ entertainment",
                "reason": "Service not available at venue",
                "variant": "Magic Show",
                "variant_type": "30 minutes"
              }
            ],
            "variant_id": "685ba661da37ec6d367cf82a",
            "variant_name": "amanaaaa",
            "venue_id": "6818aa2160c1ed42e9866300"
          }
        ],
        "status": "success",
        "total_variants": 2,
        "venue_matches": [
          {
            "best_variant_id": "6835deb59fb702a8df2a7333",
            "best_variant_name": "Birthday for Adults",
            "match_percentage": 100,
            "service_match_percentage": 100,
            "venue_id": "6818aa2160c1ed42e9866300"
          }
        ]
      }
    ]
  ],
  "publishedAt": {
    "$date": "2025-06-25T10:24:43.088Z"
  },
  "createdAt": {
    "$date": "2025-06-25T10:23:58.732Z"
  },
  "updatedAt": {
    "$date": "2025-06-25T10:36:16.070Z"
  },
  "__v": 0,
  "cuisineApiData": {
    "selectedCard": 1,
    "matchedResponse": {
      "all_cuisine_ids": [
        "67ac7d292ee4b070bd485696",
        "67aeda63d3af1523c01ef462",
        "67dba24c024b2035f1d88ec0",
        "67dba33c024b2035f1d88f32",
        "6818bdb62ff85254568198a4"
      ],
      "restaurant_data": [
        {
          "restaurant_id": "682ac689598e7130ebc681f4",
          "total_variants": 3,
          "variants": [
            {
              "categories": [
                [
                  "6818bbf52ff8525456819803",
                  "Beverages"
                ],
                [
                  "6818bbf52ff85254568197fc",
                  "Main Course"
                ],
                [
                  "68271e66bf2b309e1b076af1",
                  "Complementary"
                ]
              ],
              "categories_count": 3,
              "cost": 1200,
              "cuisine_count": 3,
              "cuisines": [
                "67ac7d292ee4b070bd485696",
                "67dba33c024b2035f1d88f32",
                "6818bdb62ff85254568198a4"
              ],
              "free_services": [],
              "free_services_count": 0,
              "is_customized": false,
              "max_persons": 50,
              "menu_items_count": 7,
              "min_persons": 10,
              "paid_services": [],
              "paid_services_count": 0,
              "variant_id": "685ba4091830b8a5b29e589b",
              "variant_name": "aman special",
              "venue_id": "6818aa2160c1ed42e9866300"
            },
            {
              "categories": [
                [
                  "6818bbf52ff85254568197fc",
                  "Main Course"
                ],
                [
                  "6818bbf52ff8525456819800",
                  "Pizza"
                ]
              ],
              "categories_count": 2,
              "cost": 1200,
              "cuisine_count": 2,
              "cuisines": [
                "67ac7d292ee4b070bd485696",
                "6818bdb62ff85254568198a4"
              ],
              "free_services": [],
              "free_services_count": 0,
              "is_customized": false,
              "max_persons": 200,
              "menu_items_count": 2,
              "min_persons": 12,
              "paid_services": [],
              "paid_services_count": 0,
              "variant_id": "685ba661da37ec6d367cf82a",
              "variant_name": "amanaaaa",
              "venue_id": "6818aa2160c1ed42e9866300"
            },
            {
              "categories": [
                [
                  "6818bbf52ff8525456819803",
                  "Beverages"
                ],
                [
                  "6818bbf52ff8525456819800",
                  "Pizza"
                ],
                [
                  "68271e66bf2b309e1b076af1",
                  "Complementary"
                ],
                [
                  "6818bbf52ff85254568197f9",
                  "Starters"
                ],
                [
                  "6818bbf52ff85254568197fc",
                  "Main Course"
                ],
                [
                  "6818bbf52ff85254568197fd",
                  "Indian Breads"
                ]
              ],
              "categories_count": 6,
              "cost": 1200,
              "cuisine_count": 4,
              "cuisines": [
                "67ac7d292ee4b070bd485696",
                "67aeda63d3af1523c01ef462",
                "67dba24c024b2035f1d88ec0",
                "6818bdb62ff85254568198a4"
              ],
              "free_services": [
                "Kids’ Entertainment"
              ],
              "free_services_count": 1,
              "is_customized": false,
              "max_persons": 50,
              "menu_items_count": 9,
              "min_persons": 15,
              "paid_services": [
                "Live DJ"
              ],
              "paid_services_count": 1,
              "variant_id": "6835deb59fb702a8df2a7333",
              "variant_name": "Birthday for Adults",
              "venue_id": "6818aa2160c1ed42e9866300"
            }
          ]
        }
      ],
      "sorted_cuisine_combinations": [
        {
          "combination_size": 3,
          "cuisine_combination": [
            {
              "value": "67ac7d292ee4b070bd485696",
              "label": "Unknown"
            },
            {
              "value": "67dba33c024b2035f1d88f32",
              "label": "Unknown"
            },
            {
              "value": "6818bdb62ff85254568198a4",
              "label": "Unknown"
            }
          ],
          "cuisine_stats": {
            "total_cuisine_count": 3,
            "unique_cuisine_ids": [
              "67ac7d292ee4b070bd485696",
              "67dba33c024b2035f1d88f32",
              "6818bdb62ff85254568198a4"
            ]
          },
          "frequency": 1,
          "matching_variants": [
            {
              "cost": 1200,
              "free_services_count": 0,
              "paid_services_count": 0,
              "variant_id": "685ba4091830b8a5b29e589b",
              "variant_name": "aman special",
              "venue_id": "6818aa2160c1ed42e9866300"
            }
          ],
          "menu_stats": {
            "category_names": [
              "Beverages",
              "Main Course",
              "Complementary"
            ],
            "total_menu_items": 7,
            "total_unique_categories": 3
          },
          "price_range": {
            "average_price": 1200,
            "max_price": 1200,
            "min_price": 1200
          },
          "service_stats": {
            "free_service_names": [],
            "paid_service_names": [],
            "total_unique_free_services": 0,
            "total_unique_paid_services": 0
          },
          "venue_stats": {
            "total_unique_venues": 1,
            "venue_ids": [
              "6818aa2160c1ed42e9866300"
            ]
          }
        },
        {
          "combination_size": 2,
          "cuisine_combination": [
            {
              "value": "67ac7d292ee4b070bd485696",
              "label": "Unknown"
            },
            {
              "value": "6818bdb62ff85254568198a4",
              "label": "Unknown"
            }
          ],
          "cuisine_stats": {
            "total_cuisine_count": 2,
            "unique_cuisine_ids": [
              "67ac7d292ee4b070bd485696",
              "6818bdb62ff85254568198a4"
            ]
          },
          "frequency": 1,
          "matching_variants": [
            {
              "cost": 1200,
              "free_services_count": 0,
              "paid_services_count": 0,
              "variant_id": "685ba661da37ec6d367cf82a",
              "variant_name": "amanaaaa",
              "venue_id": "6818aa2160c1ed42e9866300"
            }
          ],
          "menu_stats": {
            "category_names": [
              "Main Course",
              "Pizza"
            ],
            "total_menu_items": 2,
            "total_unique_categories": 2
          },
          "price_range": {
            "average_price": 1200,
            "max_price": 1200,
            "min_price": 1200
          },
          "service_stats": {
            "free_service_names": [],
            "paid_service_names": [],
            "total_unique_free_services": 0,
            "total_unique_paid_services": 0
          },
          "venue_stats": {
            "total_unique_venues": 1,
            "venue_ids": [
              "6818aa2160c1ed42e9866300"
            ]
          }
        },
        {
          "combination_size": 4,
          "cuisine_combination": [
            {
              "value": "67ac7d292ee4b070bd485696",
              "label": "Unknown"
            },
            {
              "value": "67aeda63d3af1523c01ef462",
              "label": "Unknown"
            },
            {
              "value": "67dba24c024b2035f1d88ec0",
              "label": "Unknown"
            },
            {
              "value": "6818bdb62ff85254568198a4",
              "label": "Unknown"
            }
          ],
          "cuisine_stats": {
            "total_cuisine_count": 4,
            "unique_cuisine_ids": [
              "67ac7d292ee4b070bd485696",
              "67aeda63d3af1523c01ef462",
              "67dba24c024b2035f1d88ec0",
              "6818bdb62ff85254568198a4"
            ]
          },
          "frequency": 1,
          "matching_variants": [
            {
              "cost": 1200,
              "free_services_count": 1,
              "paid_services_count": 1,
              "variant_id": "6835deb59fb702a8df2a7333",
              "variant_name": "Birthday for Adults",
              "venue_id": "6818aa2160c1ed42e9866300"
            }
          ],
          "menu_stats": {
            "category_names": [
              "Pizza",
              "Starters",
              "Beverages",
              "Complementary",
              "Main Course",
              "Indian Breads"
            ],
            "total_menu_items": 9,
            "total_unique_categories": 6
          },
          "price_range": {
            "average_price": 1200,
            "max_price": 1200,
            "min_price": 1200
          },
          "service_stats": {
            "free_service_names": [
              "Kids’ Entertainment"
            ],
            "paid_service_names": [
              "Live DJ"
            ],
            "total_unique_free_services": 1,
            "total_unique_paid_services": 1
          },
          "venue_stats": {
            "total_unique_venues": 1,
            "venue_ids": [
              "6818aa2160c1ed42e9866300"
            ]
          }
        }
      ],
      "summary": {
        "restaurant_id": "682ac689598e7130ebc681f4",
        "total_unique_cuisine_combinations": 3,
        "total_unique_cuisines": 5,
        "total_variants": 3
      }
    }
  },
  "name": "gujju",
  "specialRequirements": ""
}