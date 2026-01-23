
export const COACH_PHRASES = {
    high: [
        "Lockdown defense! The paint is sealed.",
        "Textbook positioning. That's a turnover waiting to happen.",
        "Great communication! Everyone is exactly where they need to be.",
        "Nothing easy! That's how we win games."
    ],
    medium: [
        "Decent coverage, but check your angles.",
        "Not bad, but a good passing team might find a gap.",
        "You're in the neighborhood, but tighten up the spacing.",
        "Okay effort. Let's get sharper on the next one."
    ],
    low: [
        "Wide open layup allowed! We need to rotate faster.",
        "Defense collapsed. You left the shooter wide open!",
        "Where is the help? The lane is completely open.",
        "That's a bucket for them. Focus up!",
        "Gaping hole in the zone. Review the strategy."
    ]
};

export const ZONE_INFO = {
    "2-3": {
        name: "2-3 Zone",
        actionPhrase: "Build a wall around the basket. Force them to shoot from the parking lot.",
        desc: "The standard zone defense. Two guards up top, three defenders across the baseline. It is designed to pack the paint and force the offense to settle for outside shots.",
        strengths: "Rebounding, protecting the paint.",
        weaknesses: "High post (nail), corners, good shooters.",
        roles: "Guards (1,2) pressure the top. Forwards (3,4) sprint to cover corners. Center (5) protects the rim.",
        variations: {
            Contain: "Pack Line: Everyone sinks 2 feet closer to the basket. No layups allowed.",
            Pressure: "Standard: Hands high. Guards challenge shots but don't get beat off the dribble.",
            Trap: "Corner Blitz: When the ball goes to the corner, the Guard and Forward double team immediately."
        }
    },
    "3-2": {
        name: "3-2 Zone",
        actionPhrase: "Chase them off the line. Perfect against teams that love 3-pointers.",
        desc: "Perimeter focused. Three defenders up top to challenge shooters, with two bigs protecting the basket. Great for speeding up the game.",
        strengths: "Denying 3-point shots, trapping wings.",
        weaknesses: "Corners, high post, rebounding (only 2 bigs).",
        roles: "Point (1) pressures ball. Wings (2,3) jump passing lanes. Bigs (4,5) must front the post and cover corners.",
        variations: {
            Contain: "Drop Coverage: The top defender (1) drops to the Free Throw line to stop drives.",
            Pressure: "Denial: Wings (2,3) play passing lanes aggressively to get steals.",
            Trap: "Wing Trap: As soon as the ball crosses half court to a side, 1 and the Wing double it."
        }
    },
    "1-3-1": {
        name: "1-3-1 Zone",
        actionPhrase: "Chaos and Traps. Confuse the offense and steal the passes.",
        desc: "A unique, aggressive trapping zone shaped like a cross. It relies on athleticism and anticipation to force turnovers.",
        strengths: "Confusion, passing lanes, corner traps.",
        weaknesses: "Rebounding, corner 3s (if rotation is slow).",
        roles: "'Chaser' (1) harasses ball. 'Warrior' (4) runs baseline corner-to-corner. 'Keeper' (5) owns the middle. Wings (2,3) trap.",
        variations: {
            Contain: "Tight 1-3-1: The Warrior (4) stays in the lane instead of chasing corners.",
            Pressure: "Full Front: The Keeper (5) fronts the post to deny entry passes.",
            Trap: "4-Point Trap: We trap the 4 corners of the half-court. High risk, high reward."
        }
    }
};

export const TUTORIAL_SCENARIOS = [
    { id: 'tut-1', name: "Basic Controls", ballPos: { x: 50, y: 65 }, lockedIds: [2, 3, 4, 5], tips: { "2-3": "Tapping is precise." }, zones: { "2-3": [{ id: 1, x: 50, y: 50 }] } },
    { id: 'tut-2', name: "The 2-3 Setup", ballPos: { x: 50, y: 65 }, lockedIds: [], tips: { "2-3": "Perfect shape!" }, zones: { "2-3": [{ id: 1, x: 40, y: 55 }, { id: 2, x: 60, y: 55 }, { id: 3, x: 20, y: 25 }, { id: 4, x: 80, y: 25 }, { id: 5, x: 50, y: 25 }] } }
];

export const BASE_SCENARIOS = [
    { id: 1, name: "Top of Key", ballPos: { x: 50, y: 65 }, zones: { "2-3": [{ id: 1, x: 40, y: 55 }, { id: 2, x: 60, y: 55 }, { id: 3, x: 20, y: 25 }, { id: 4, x: 80, y: 25 }, { id: 5, x: 50, y: 25 }], "3-2": [{ id: 1, x: 50, y: 55 }, { id: 2, x: 30, y: 45 }, { id: 3, x: 70, y: 45 }, { id: 4, x: 35, y: 20 }, { id: 5, x: 65, y: 20 }], "1-3-1": [{ id: 1, x: 50, y: 58 }, { id: 2, x: 25, y: 45 }, { id: 3, x: 75, y: 45 }, { id: 5, x: 50, y: 42 }, { id: 4, x: 50, y: 15 }] } },
    { id: 2, name: "Right Wing", ballPos: { x: 85, y: 60 }, zones: { "2-3": [{ id: 2, x: 75, y: 50 }, { id: 1, x: 50, y: 45 }, { id: 4, x: 80, y: 30 }, { id: 5, x: 60, y: 25 }, { id: 3, x: 20, y: 25 }], "3-2": [{ id: 3, x: 75, y: 50 }, { id: 1, x: 60, y: 55 }, { id: 2, x: 35, y: 40 }, { id: 5, x: 80, y: 25 }, { id: 4, x: 50, y: 25 }], "1-3-1": [{ id: 3, x: 75, y: 55 }, { id: 1, x: 60, y: 65 }, { id: 5, x: 65, y: 40 }, { id: 4, x: 85, y: 20 }, { id: 2, x: 50, y: 30 }] } },
    { id: 3, name: "Right Corner", ballPos: { x: 92, y: 20 }, zones: { "2-3": [{ id: 4, x: 85, y: 25 }, { id: 5, x: 65, y: 20 }, { id: 2, x: 75, y: 40 }, { id: 3, x: 50, y: 20 }, { id: 1, x: 50, y: 50 }], "3-2": [{ id: 5, x: 85, y: 25 }, { id: 4, x: 60, y: 20 }, { id: 3, x: 80, y: 45 }, { id: 1, x: 50, y: 45 }, { id: 2, x: 30, y: 30 }], "1-3-1": [{ id: 4, x: 88, y: 25 }, { id: 3, x: 82, y: 35 }, { id: 5, x: 70, y: 25 }, { id: 1, x: 60, y: 50 }, { id: 2, x: 50, y: 20 }] } },
    { id: 4, name: "Left Wing", ballPos: { x: 15, y: 60 }, zones: { "2-3": [{ id: 1, x: 25, y: 50 }, { id: 2, x: 50, y: 45 }, { id: 3, x: 20, y: 30 }, { id: 5, x: 40, y: 25 }, { id: 4, x: 80, y: 25 }], "3-2": [{ id: 2, x: 25, y: 50 }, { id: 1, x: 40, y: 55 }, { id: 3, x: 65, y: 40 }, { id: 4, x: 20, y: 25 }, { id: 5, x: 50, y: 25 }], "1-3-1": [{ id: 2, x: 25, y: 55 }, { id: 1, x: 40, y: 65 }, { id: 5, x: 35, y: 40 }, { id: 4, x: 15, y: 20 }, { id: 3, x: 50, y: 30 }] } },
    { id: 5, name: "Left Corner", ballPos: { x: 8, y: 20 }, zones: { "2-3": [{ id: 3, x: 15, y: 25 }, { id: 5, x: 35, y: 20 }, { id: 1, x: 25, y: 40 }, { id: 2, x: 50, y: 50 }, { id: 4, x: 50, y: 20 }], "3-2": [{ id: 4, x: 15, y: 25 }, { id: 5, x: 40, y: 20 }, { id: 2, x: 20, y: 45 }, { id: 1, x: 50, y: 45 }, { id: 3, x: 70, y: 30 }], "1-3-1": [{ id: 4, x: 12, y: 25 }, { id: 2, x: 18, y: 35 }, { id: 5, x: 30, y: 25 }, { id: 1, x: 40, y: 50 }, { id: 3, x: 50, y: 20 }] } },
    { id: 6, name: "High Post", ballPos: { x: 50, y: 45 }, zones: { "2-3": [{ id: 5, x: 50, y: 35 }, { id: 3, x: 30, y: 25 }, { id: 4, x: 70, y: 25 }, { id: 1, x: 40, y: 50 }, { id: 2, x: 60, y: 50 }], "3-2": [{ id: 4, x: 45, y: 35 }, { id: 5, x: 55, y: 35 }, { id: 1, x: 50, y: 60 }, { id: 2, x: 30, y: 45 }, { id: 3, x: 70, y: 45 }], "1-3-1": [{ id: 5, x: 50, y: 38 }, { id: 1, x: 50, y: 60 }, { id: 2, x: 35, y: 45 }, { id: 3, x: 65, y: 45 }, { id: 4, x: 50, y: 20 }] } }
];

export const DAILY_PLAYLIST = [
    { scenarioIndex: 0, zone: "2-3", style: "Pressure" },   // 1. Top (2-3)
    { scenarioIndex: 1, zone: "2-3", style: "Pressure" },   // 2. R Wing (2-3)
    { scenarioIndex: 3, zone: "1-3-1", style: "Pressure" }, // 3. L Wing (1-3-1)
    { scenarioIndex: 5, zone: "1-3-1", style: "Pressure" }, // 4. High Post (1-3-1)
    { scenarioIndex: 2, zone: "1-3-1", style: "Pressure" }  // 5. R Corner (1-3-1) - ALL PRESSURE
];
