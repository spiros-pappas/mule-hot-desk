{
    "interactionModel": {
        "languageModel": {
            "invocationName": "hot desk",
            "intents": [
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.NavigateHomeIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.FallbackIntent",
                    "samples": []
                },
                {
                    "name": "BookHotDeskIntent",
                    "slots": [
                        {
                            "name": "startDate",
                            "type": "AMAZON.DATE"
                        },
                        {
                            "name": "endDate",
                            "type": "AMAZON.DATE"
                        },
                        {
                            "name": "dayOfWeek",
                            "type": "AMAZON.DayOfWeek",
                            "multipleValues": {
                                "enabled": true
                            }
                        }
                    ],
                    "samples": [
                        "book desk between {startDate} and {endDate}",
                        "book a desk from {startDate} to {endDate}",
                        "book me a desk from {startDate} to {endDate}",
                        "book a desk for {dayOfWeek}",
                        "book me a desk for {dayOfWeek}"
                    ]
                },
                {
                    "name": "CheckBookingStatusIntent",
                    "slots": [
                        {
                            "name": "dayOfWeek",
                            "type": "AMAZON.DayOfWeek",
                            "multipleValues": {
                                "enabled": true
                            }
                        }
                    ],
                    "samples": [
                        "check the status of my booking for {dayOfWeek}",
                        "what is the status of my booking for {dayOfWeek}"
                    ]
                },
                {
                    "name": "CancelBookingIntent",
                    "slots": [
                        {
                            "name": "dayOfWeek",
                            "type": "AMAZON.DayOfWeek",
                            "multipleValues": {
                                "enabled": true
                            }
                        }
                    ],
                    "samples": [
                        "cancel my booking for {dayOfWeek}",
                        "cancel my booking on {dayOfWeek}"
                    ]
                },
                {
                    "name": "GetTeamBookginsIntent",
                    "slots": [
                        {
                            "name": "dayOfWeek",
                            "type": "AMAZON.DayOfWeek",
                            "multipleValues": {
                                "enabled": true
                            }
                        }
                    ],
                    "samples": [
                        "who is going to be in the office on {dayOfWeek}",
                        "who is going to be in the office {dayOfWeek}",
						"who is going to the office on {dayOfWeek}",
						"who is going to the office {dayOfWeek}"
                    ]
                }
            ],
            "types": []
        }
    }
}