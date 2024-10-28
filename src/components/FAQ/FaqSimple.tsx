import { Container, Title, Accordion } from "@mantine/core";
import classes from "./FaqSimple.module.css";

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

export function FaqSimple() {
  return (
    <Container size="lg" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated" maw={"75vw"} miw={"75vw"}>
        <Accordion.Item className={classes.item} value="how-to-pay">
          <Accordion.Control>How do I pay the rent?</Accordion.Control>
          <Accordion.Panel>
            The rent can be paid by check or cash in US dollars. If you wish to
            make a payment by credit card or pay in RMB via bank transfer or
            Alipay, an additional 5% service fee will apply.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="when-to-pay">
          <Accordion.Control>When do I pay the rent?</Accordion.Control>
          <Accordion.Panel>
            The deposit and 1st month rent will be paid upon the first arrival
            at the dormitory. The rent for the following month must be paid
            before the same date next month; otherwise, the access card will be
            disabled, and you will not be able to enter your room.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="move-in-prep">
          <Accordion.Control>
            What should I prepare for moving in?
          </Accordion.Control>
          <Accordion.Panel>
            Please bring your personal daily essentials, including a pillow,
            blanket, sheets, toiletries, and more.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="travel-plan-change">
          <Accordion.Control>
            If I no longer need airport pick-up or my travel plans change, what
            should I do?
          </Accordion.Control>
          <Accordion.Panel>
            Please contact STAC as soon as possible to inform them of the
            changes. If you forget to reach out, it may result in the
            cancellation of your accommodation, and all fees and deposits will
            be non-refundable.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="med-insurance">
          <Accordion.Control>
            Why do I need to purchase medical insurance before arriving at STAC
            dorm?
          </Accordion.Control>
          <Accordion.Panel>
            Medical insurance is required to ensure you have access to necessary
            healthcare services during your stay. You must obtain medical
            insurance or travel insurance to cover you during the airport
            pick-up and the period before you purchase your education provider’s
            designated health insurance at your school.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="renter-insurance">
          <Accordion.Control>
            Why do I need to purchase renter's insurance during my stay?
          </Accordion.Control>
          <Accordion.Panel>
            Renter's insurance is important because it protects your personal
            belongings in case of theft, damage, or loss due to events like fire
            or flooding. It also provides liability coverage, which can protect
            you if someone is injured in your rented space.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="renew-lease">
          <Accordion.Control>
            What should I do if I want to move out or renew my lease when it
            ends?
          </Accordion.Control>
          <Accordion.Panel>
            Please notify STAC of your decision (to renew or move out) at least
            30 days before your lease ends. Kindly provide this information in
            writing or via email for clarity. Failure to notify us of your
            intent to move out will result in a charge for a 30-day rent
            extension. Failure to notify us of your intent to renew may result
            in the unavailability of your room.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="cant-renew">
          <Accordion.Control>
            What should I do if my lease cannot be renewed due to the
            unavailability of the room and other reasons?
          </Accordion.Control>
          <Accordion.Panel>
            Please start looking for new housing options as soon as possible to
            find a suitable place. If you stay beyond the lease term, please
            check with STAC for the daily rate for your room. If you need STAC
            to assist you in finding a room in the local area, a service fee of
            $750 will apply.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="distance">
          <Accordion.Control>
            How far is the STAC dorm from De Anza College?
          </Accordion.Control>
          <Accordion.Panel>
            The distance from STAC dorm to De Anza College is approximately 5
            miles. It usually takes about 10-15 minutes by car and around 30
            minutes by bus.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="documents">
          <Accordion.Control>
            What documents do I need to open a local bank account in the U.S.?
          </Accordion.Control>
          <Accordion.Panel>
            Passport, A photo ID (such as a driver's license or student
            ID),Email address, local Phone number.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="meals">
          <Accordion.Control>How should I handle my meals?</Accordion.Control>
          <Accordion.Panel>
            The dormitory will provide breakfast every weekday from Monday to
            Friday. For dinner, you can either order takeout or cook for
            yourself. Here are some examples of what breakfast will include:
            juice, toast, milk, eggs, bread, fruit, and more.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="external-visits">
          <Accordion.Control>
            Can my friends or family stay overnight to visit me?
          </Accordion.Control>
          <Accordion.Panel>
            Students are not permitted to have friends or family stay overnight.
            For special circumstances, please contact the STAC staff for
            guidance.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="wifi">
          <Accordion.Control>
            Is there internet access in the dormitory?
          </Accordion.Control>
          <Accordion.Panel>
            Yes, the dormitory has free public Wi-Fi. However, the internet is
            primarily for study purposes. The public Wi-Fi is intended for all
            tenants and should not be used for downloading music, movies, or
            playing games, as this may jeopardize the service. You are welcome
            to set up your own internet service to meet your needs.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="dorm-room">
          <Accordion.Control>What will be in my dorm room?</Accordion.Control>
          <Accordion.Panel>
            All students will have a bed, mattress, desk, chair, wardrobe, and
            mini fridge. If you have specific requests for your room, you will
            need to purchase those items yourself. In most cases, students share
            a bathroom with one other person.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="change-room">
          <Accordion.Control>
            Am I allowed to change my room during my stay?
          </Accordion.Control>
          <Accordion.Panel>
            Students may request to change their room once during their stay for
            valid reasons, but this request may be denied due to occupancy or
            other factors. A room change requires signing a new lease agreement
            and covering related costs, such as application fees.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="house-rules">
          <Accordion.Control>
            What are the house rules for the STAC dormitory? What happens if I
            violate them?
          </Accordion.Control>
          <Accordion.Panel>
            The house rules outline the requirements for living in the STAC
            dormitory. Please read through the lease agreement and house rules
            carefully. If students violate the lease agreements or STAC’s house
            rules, they will be notified and asked to correct the violation. If
            the same or another violation occurs or continues, the resident will
            receive written notice that further violations may result in
            eviction.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="termination">
          <Accordion.Control>
            What could cause my lease to be terminated?
          </Accordion.Control>
          <Accordion.Panel>
            If students violate lease agreements, STAC’s house rules, fail to
            comply with management requirements, or are disrespectful to STAC
            management staff, it may lead to termination of the lease. This
            includes behaviors such as theft, harassment, difficulties in
            getting along with other international students, violent behavior,
            underage drinking for students under 21, lying or committing fraud,
            and engaging in any illegal activities. Such actions may result in
            eviction without any refund.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="placeholder">
          <Accordion.Control>
            In case of an emergency, who should I contact?
          </Accordion.Control>
          <Accordion.Panel>
            In an emergency, you should call 911 and also contact STAC staff at
            the same time.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
/*
<Accordion.Item className={classes.item} value="placeholder">
  <Accordion.Control>placeholder</Accordion.Control>
  <Accordion.Panel>placeholder</Accordion.Panel>
</Accordion.Item>
*/
