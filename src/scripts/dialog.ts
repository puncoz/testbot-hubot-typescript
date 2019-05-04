import { Response, Robot } from "hubot"
import { SlackAdapter } from "hubot-slack"
import { getUser } from "../helpers/slack"

module.exports = async function dialog(robot: Robot<SlackAdapter>) {
  robot.respond(/dialog$/i, async (res: Response<SlackAdapter>) => {
    const user: SlackUser = getUser(res)

    res.send("Hello " + user.name)
  })
}
