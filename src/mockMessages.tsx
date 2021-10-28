interface mockMessages {
    id: number
    text: string
    senderId: number
}

export const mockMessages: Array<mockMessages> = [
    {
        id: 0,
        text: "Hey buddy, I think you've got the wrong door, the leather club's two blocks down.",
        senderId: 0,
    },
    {
        id: 1,
        text: 'Fuck You!',
        senderId: 1,
    },
    {
        id: 2,
        text: 'Oh, Fuck You leather man. Maybe you and I should settle it right here on the ring if you think your so tough.',
        senderId: 0,
    },
    { id: 3, text: "Oh yea? I'll kick your ass!", senderId: 1 },
    {
        id: 4,
        text: "Ha! Yeah right man. Let's go! Why don't you get out of that leather stuff? I'll strip down out of this and we'll settle it right here in the ring. What do you say?",
        senderId: 0,
    },
    { id: 5, text: 'Yeah, no problem buddy!', senderId: 1 },
    {
        id: 6,
        text: 'You got it. Get out of that uh, jabroni outfit.',
        senderId: 0,
    },
    { id: 7, text: 'Yeah, smart ass.', senderId: 1 },
    { id: 8, text: "I'll show you who's the boss of this gym.", senderId: 0 },
]
