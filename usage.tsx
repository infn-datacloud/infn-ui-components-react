"use client";

import { Status } from "@/components/badges";
import { Button } from "@/components/buttons";
import { Carousel } from "@/components/carousel";
import { Combobox, ComboboxOption } from "@/components/combobox";
import ConfirmModal from "@/components/confirm-modal";
import { Drawer, ToggleDrawerButton, DrawerLink } from "@/components/drawer";
import {
  Checkbox,
  Description,
  DropdownList,
  Field,
  Form,
  Label,
  Select,
  SelectOption,
} from "@/components/form";
import { Gravatar } from "@/components/gravatar";
import { Input, InputList, InputSearch } from "@/components/inputs";
import Link from "@/components/link";
import { Modal, ModalBody, ModalFooter } from "@/components/modal";
import Notifications from "@/components/notifications";
import { Options } from "@/components/options";
import Paginator from "@/components/paginator";
import { Stepper } from "@/components/stepper";
import { Tab, TabGroup, TabPanels, TabList, TabPanel } from "@/components/tabs";
import { Textarea } from "@/components/textarea";
import { ToasterPortal } from "@/components/toaster";

import { useState } from "react";

export default function Home() {
  const onSelect = (value: string | null) => {
    console.log("Selected: " + value);
  };

  const handleQueryChange = async (query: string) => {
    console.log("Query changed:", query);
  };

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="gap-16 bg-gray-100 p-8 pb-20 sm:p-20 md:ml-80">
      <main className="row-start-2 flex flex-col items-center gap-[16px] sm:items-start">
        <h1>Components List</h1>
        <br />

        <h2>Badges</h2>
        <Status active={true}></Status>
        <Status active={false}></Status>
        <br />

        <h2>Buttons</h2>
        <Button className="btn btn-primary">Click me!</Button>
        <Button className="btn btn-secondary">Click me!</Button>
        <Button className="btn btn-tertiary">Click me!</Button>
        <Button className="btn btn-danger">Click me!</Button>
        <Button className="btn btn-danger-secondary">Click me!</Button>
        <Button className="btn btn-danger-tertiary">Click me!</Button>
        <br />

        <h2>Carousel (Not working)</h2>
        <Carousel selectedIndex={1}>
          <p>Test 1</p>
          <p>Test 2</p>
        </Carousel>
        <br />

        <h2>Combobox</h2>
        <Combobox onSelect={onSelect} onQueryChange={handleQueryChange}>
          <ComboboxOption value="option1">Option 1</ComboboxOption>
          <ComboboxOption value="option2">Option 2</ComboboxOption>
          <ComboboxOption value="option3">Option 3</ComboboxOption>
        </Combobox>
        <br />

        <h2>Confirm Modal</h2>
        <Button
          className="btn btn-primary"
          onClick={() => setShowConfirmModal(true)}
        >
          Show Confirm Modal
        </Button>
        <ConfirmModal
          onConfirm={() => {
            setShowConfirmModal(false);
          }}
          onClose={() => {
            setShowConfirmModal(false);
          }}
          confirmButtonText="Yes"
          cancelButtonText="No"
          show={showConfirmModal}
          title="Confirm Action"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            cursus turpis odio, sit amet semper diam viverra vitae. Cras
            fermentum mauris ex, sit amet vehicula sapien placerat rhoncus.
            Quisque non congue massa, et bibendum risus.
          </p>
        </ConfirmModal>
        <br />

        <h2>Drawer</h2>
        <ToggleDrawerButton />
        <Drawer>
          <p className="text-white">This is a drawer component.</p>
          <DrawerLink title="Users" href="/users" />
          <DrawerLink title="My Profile" href="/users/me" />
          <DrawerLink title="My Groups" href="/users/me/groups" />
          <DrawerLink title="Clients" href="/clients" />
          <DrawerLink title="My Clients" href="/clients?me" />
        </Drawer>
        <br />

        <h2>Form</h2>
        <Form>
          <Field>
            <Description>This is a description for the form.</Description>
          </Field>
          <Field>
            <Label data-required>Select Example</Label>
            <Select
              name="example"
              defaultValue={{ id: "option1", name: "Option 1" }}
            >
              <SelectOption value={{ id: "option1", name: "Option 1" }}>
                Option 1
              </SelectOption>
              <SelectOption value={{ id: "option2", name: "Option 2" }}>
                Option 2
              </SelectOption>
              <SelectOption value={{ id: "option3", name: "Option 3" }}>
                Option 3
              </SelectOption>
            </Select>
          </Field>
          <Field>
            <Label data-required>Checkbox Example</Label>
            <Checkbox id="checkbox" name="checkbox" />
          </Field>
          <DropdownList
            name="dropdown"
            title="Dropdown Example"
            options={[
              { id: "option1", name: "Option 1" },
              { id: "option2", name: "Option 2" },
              { id: "option3", name: "Option 3" },
            ]}
            defaultOptions={[{ id: "option1", name: "Option 1" }]}
          />
          <Field>
            <Input></Input>
          </Field>
          <Field>
            <InputList originalItems={["test", "asdf"]}></InputList>
          </Field>
          <Field>
            <InputSearch
              onQueryChange={val => {
                console.log(val);
              }}
              onClear={() => {
                console.log("clear");
              }}
            ></InputSearch>
          </Field>
          <Textarea></Textarea>
          <Button className="btn btn-primary" type="submit">
            Submit
          </Button>
        </Form>
        <br />

        <h2>Gravatar</h2>
        <Gravatar email={"ettore.serra@ba.infn.it"} />
        <br />

        <h2>Link</h2>
        <Link href="https://www.example.com" target="_blank">
          Example Link
        </Link>
        <br />

        <h2>Modal</h2>
        <Button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Show Modal
        </Button>
        <Modal
          show={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          title="Modal Title"
        >
          <ModalBody>
            <p>This is a modal body.</p>
          </ModalBody>
          <ModalFooter>
            <Button
              className="btn btn-primary"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </Modal>
        <br />

        <h2>Notifications</h2>
        <Notifications></Notifications>
        <br />

        <h2>Options</h2>
        <Options>test</Options>
        <br />

        <h2>Paginator</h2>
        <Paginator numberOfPages={5}></Paginator>
        <br />

        <h2>Stepper</h2>
        <Stepper currentPage={1} totalPages={5}></Stepper>
        <br />

        <h2>Tabs</h2>
        <TabGroup>
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>This is the content of Tab 1.</p>
            </TabPanel>
            <TabPanel>
              <p>This is the content of Tab 2.</p>
            </TabPanel>
            <TabPanel>
              <p>This is the content of Tab 3.</p>
            </TabPanel>
          </TabPanels>
        </TabGroup>
        <br />

        <h2>Toaster</h2>
        <ToasterPortal
          notification={{
            message: "test message",
            subtitle: "subtitle",
            type: "success",
          }}
        ></ToasterPortal>
        <br />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
    </div>
  );
}
